<?php

/**
 * @package Bootscore Child
 *
 * @version 6.1.0
 */


// Exit if accessed directly
defined('ABSPATH') || exit;


/**
 * Enqueue scripts and styles
 */
add_action('wp_enqueue_scripts', 'bootscore_child_enqueue_styles');
function bootscore_child_enqueue_styles() {

  // Compiled main.css (compiled automatically by the parent Bootscore SCSS compiler)
  $child_css = get_stylesheet_directory() . '/assets/css/main.css';
  $modified_bootscoreChildCss = file_exists($child_css) ? date('YmdHi', filemtime($child_css)) : null;
  wp_enqueue_style('main', get_stylesheet_directory_uri() . '/assets/css/main.css', array('parent-style'), $modified_bootscoreChildCss);

  // style.css
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

  // custom.js
  // Get modification time. Enqueue file with modification date to prevent browser from loading cached scripts when file content changes.
  $custom_js = get_stylesheet_directory() . '/assets/js/custom.js';
  $modificated_CustomJS = file_exists($custom_js) ? date('YmdHi', filemtime($custom_js)) : null;
  wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/assets/js/custom.js', array('jquery'), $modificated_CustomJS, false, true);
}


/**
 * Register the Portfolio post type
 */
add_action('init', 'kmt_register_portfolio');
function kmt_register_portfolio() {
  register_post_type('portfolio', array(
    'labels' => array(
      'name'               => __('Portfolio', 'bootscore'),
      'singular_name'      => __('Project', 'bootscore'),
      'add_new'            => __('Add New Project', 'bootscore'),
      'add_new_item'       => __('Add New Project', 'bootscore'),
      'edit_item'          => __('Edit Project', 'bootscore'),
      'all_items'          => __('All Projects', 'bootscore'),
      'view_item'          => __('View Project', 'bootscore'),
      'search_items'       => __('Search Projects', 'bootscore'),
      'not_found'          => __('No projects found', 'bootscore'),
      'not_found_in_trash' => __('No projects found in Trash', 'bootscore'),
    ),
    'public'             => true,
    'show_in_rest'       => true,
    'menu_position'      => 5,
    'menu_icon'          => 'dashicons-portfolio',
    'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
    'has_archive'        => false,
    'rewrite'            => array('slug' => 'work'),
    'capability_type'    => 'post',
  ));

  // Kicker line shown above a project title on the portfolio cards
  register_post_meta('portfolio', '_kmt_kicker', array(
    'single'       => true,
    'type'         => 'string',
    'show_in_rest' => false,
    'auth_callback' => function () {
      return current_user_can('edit_posts');
    },
  ));
}


/**
 * Shorter excerpts on cards
 */
add_filter('excerpt_length', function () {
  return 28;
}, 999);


/**
 * Estimated reading time for a post, e.g. "4 min read".
 */
function kmt_post_reading_time($post_id = null) {
  $post_id = $post_id ? (int) $post_id : get_the_ID();
  $content = get_post_field('post_content', $post_id);
  if (!$content) {
    return '';
  }
  $words   = str_word_count(wp_strip_all_tags($content));
  $minutes = max(1, (int) ceil($words / 200));
  return sprintf(
    /* translators: %d: minutes */
    _n('%d min read', '%d min read', $minutes, 'bootscore'),
    $minutes
  );
}


/**
 * Custom logo support — header brand uses the theme's SVG mark
 */
add_action('after_setup_theme', 'kmt_theme_setup');
function kmt_theme_setup() {
  add_theme_support('custom-logo');
  add_theme_support('post-thumbnails');
}


/**
 * Portfolio widget areas — replace the WooCommerce shop widgets
 * (product categories / filters / recent products) that shipped with Bootscore.
 */
add_action('widgets_init', 'kmt_portfolio_widgets_init');
function kmt_portfolio_widgets_init() {
  // Sidebar on portfolio index / single project
  register_sidebar(array(
    'name'          => esc_html__('Portfolio Sidebar', 'bootscore'),
    'id'            => 'portfolio-sidebar',
    'description'   => esc_html__('Widgets shown next to the portfolio grid.', 'bootscore'),
    'before_widget' => '<section id="%1$s" class="widget mb-4">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title h5">',
    'after_title'   => '</h2>',
  ));

  // Footer strip under the portfolio grid
  register_sidebar(array(
    'name'          => esc_html__('Portfolio Footer', 'bootscore'),
    'id'            => 'portfolio-footer',
    'description'   => esc_html__('Widgets shown below the portfolio grid.', 'bootscore'),
    'before_widget' => '<div class="widget footer_widget mb-3">',
    'after_widget'  => '</div>',
    'before_title'  => '<h2 class="widget-title h5">',
    'after_title'   => '</h2>',
  ));
}


/**
 * KMT Portfolio Projects widget — lists recent work (successor to
 * WooCommerce's "Recent Products" / "Product Categories" widgets).
 */
add_action('widgets_init', 'kmt_register_portfolio_widget');
function kmt_register_portfolio_widget() {
  register_widget('KMT_Portfolio_Widget');
}

class KMT_Portfolio_Widget extends WP_Widget {

  public function __construct() {
    parent::__construct(
      'kmt_portfolio_projects',
      esc_html__('KMT Portfolio Projects', 'bootscore'),
      array(
        'description' => esc_html__('Show recent portfolio projects as a compact list.', 'bootscore'),
        'classname'   => 'kmt-portfolio-widget',
      )
    );
  }

  public function widget($args, $instance) {
    $title  = !empty($instance['title']) ? $instance['title'] : esc_html__('Selected Work', 'bootscore');
    $count  = !empty($instance['count']) ? (int) $instance['count'] : 5;
    $query  = new WP_Query(array(
      'post_type'      => 'portfolio',
      'posts_per_page' => $count,
      'post_status'    => 'publish',
    ));

    if (!$query->have_posts()) {
      return;
    }

    echo $args['before_widget']; // phpcs:ignore WordPress.Security.EscapeOutput
    if ($title) {
      echo $args['before_title'] . esc_html($title) . $args['after_title']; // phpcs:ignore
    }
    ?>
    <ul class="list-unstyled mb-0 kmt-portfolio-widget-list">
      <?php while ($query->have_posts()) : $query->the_post(); ?>
        <li class="mb-2">
          <a href="<?php the_permalink(); ?>" class="fw-semibold text-decoration-none">
            <?php the_title(); ?>
          </a>
          <?php $kicker = get_post_meta(get_the_ID(), '_kmt_kicker', true); ?>
          <?php if ($kicker) : ?>
            <div class="small text-muted"><?= esc_html($kicker); ?></div>
          <?php endif; ?>
        </li>
      <?php endwhile; ?>
    </ul>
    <?php
    echo $args['after_widget']; // phpcs:ignore WordPress.Security.EscapeOutput
    wp_reset_postdata();
  }

  public function form($instance) {
    $title = !empty($instance['title']) ? $instance['title'] : esc_html__('Selected Work', 'bootscore');
    $count = !empty($instance['count']) ? (int) $instance['count'] : 5;
    ?>
    <p>
      <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php esc_html_e('Title', 'bootscore'); ?></label>
      <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>"
             name="<?php echo esc_attr($this->get_field_name('title')); ?>"
             type="text" value="<?php echo esc_attr($title); ?>">
    </p>
    <p>
      <label for="<?php echo esc_attr($this->get_field_id('count')); ?>"><?php esc_html_e('Number of projects', 'bootscore'); ?></label>
      <input class="widefat" id="<?php echo esc_attr($this->get_field_id('count')); ?>"
             name="<?php echo esc_attr($this->get_field_name('count')); ?>"
             type="number" min="1" max="20" value="<?php echo esc_attr($count); ?>">
    </p>
    <?php
  }

  public function update($new_instance, $old_instance) {
    return array(
      'title' => sanitize_text_field($new_instance['title'] ?? ''),
      'count' => max(1, min(20, (int) ($new_instance['count'] ?? 5))),
    );
  }
}
