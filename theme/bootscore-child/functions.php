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
