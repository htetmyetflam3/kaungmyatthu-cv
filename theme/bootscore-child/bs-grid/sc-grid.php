<?php

/*
 * Grid template — KMT child override of bs Grid's sc-grid.php
 *
 * Override path (per docs + inc/locate-template.php):
 *   your-theme/bs-grid/sc-grid.php   ← this file
 *
 * Shortcodes self-register when this file is loaded on wp_head —
 * no extra registration needed.
 *
 * Posts:
 * [bs-grid type="post" category="cars, boats" order="ASC" orderby="date" posts="6"]
 *
 * Child-pages:
 * [bs-grid type="page" post_parent="21" order="ASC" orderby="title" posts="6"]
 *
 * Custom post types (portfolio, etc.):
 * [bs-grid type="portfolio" order="ASC" orderby="menu_order" posts="-1"]
 * [bs-grid type="portfolio" tax="category" terms="web" posts="5"]
 *
 * Single items:
 * [bs-grid type="post" id="1, 15"]
 *
 * Optional:
 * excerpt="false"  hide excerpt
 * tags="false"     hide tags
 * categories="false" hide categories
 */


// Exit if accessed directly
defined('ABSPATH') || exit;


// Grid Shortcode
add_shortcode('bs-grid', 'bootscore_grid');
function bootscore_grid($atts) {

  ob_start();
  $atts = shortcode_atts(array(
    'type'        => 'post',
    'post_status' => 'publish',
    'order'       => 'date',
    'orderby'     => 'date',
    'posts'       => -1,
    'category'    => '',
    'post_parent' => '',
    'tax'         => '',
    'terms'       => '',
    'id'          => '',
    'excerpt'     => 'true',
    'tags'        => 'true',
    'categories'  => 'true',
  ), $atts);

  $options = array(
    'post_type'      => sanitize_text_field($atts['type']),
    'order'          => sanitize_text_field($atts['order']),
    'orderby'        => sanitize_text_field($atts['orderby']),
    'posts_per_page' => is_numeric($atts['posts']) ? (int) $atts['posts'] : -1,
    'category_name'  => sanitize_text_field($atts['category']),
    'post_parent'    => is_numeric($atts['post_parent']) ? (int) $atts['post_parent'] : '',
  );

  $tax = trim(sanitize_text_field($atts['tax']));
  $terms = trim(sanitize_text_field($atts['terms']));
  if ($tax != '' && $terms != '') {
    $terms = explode(',', $terms);
    $terms = array_map('trim', $terms);
    $terms = array_filter($terms);
    $terms = array_unique($terms);
    unset($options['category_name']);
    $options['tax_query'] = array(array(
      'taxonomy' => $tax,
      'field'    => 'slug',
      'terms'    => $terms,
    ));
  }

  if ($atts['id'] != '') {
    $ids = explode(',', sanitize_text_field($atts['id']));
    $ids = array_map('intval', $ids);
    $ids = array_filter($ids);
    $ids = array_unique($ids);
    $options['post__in'] = $ids;
  }

  $query = new WP_Query($options);
  if ($query->have_posts()) { ?>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 kmt-post-grid">
      <?php while ($query->have_posts()) : $query->the_post(); ?>

      <div class="<?= esc_attr(apply_filters('bootscore/bs-grid/class/col', 'col')); ?>">

        <article <?php post_class('card'); ?>>

          <a href="<?php the_permalink(); ?>">
            <?php if (has_post_thumbnail()) : ?>
              <?= get_the_post_thumbnail(get_the_ID(), 'medium_large', array('class' => 'card-img-top', 'alt' => esc_attr(get_the_title()))); ?>
            <?php else : ?>
              <div class="kmt-thumb-placeholder"><?= esc_html(mb_substr(get_the_title(), 0, 1)); ?></div>
            <?php endif; ?>
          </a>

          <div class="card-body d-flex flex-column">

            <div class="kmt-card-kicker">
              <span>
                <?php if ('portfolio' === get_post_type()) : ?>
                  <?php $kmt_kicker = get_post_meta(get_the_ID(), '_kmt_kicker', true); ?>
                  <?= $kmt_kicker ? esc_html($kmt_kicker) : esc_html__('Project', 'bootscore'); ?>
                <?php elseif ($atts['categories'] == 'true') : ?>
                  <?= wp_kses_post(get_the_category_list(', ') ?: esc_html__('Uncategorized', 'bootscore')); ?>
                <?php endif; ?>
              </span>
              <span class="kmt-card-date"><?= esc_html(get_the_date()); ?></span>
            </div>

            <h2 class="card-title h5">
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h2>

            <?php if ($atts['excerpt'] == 'true') : ?>
              <p class="card-text"><?= esc_html(get_the_excerpt()); ?></p>
            <?php endif; ?>

            <a class="kmt-card-more mt-auto" href="<?php the_permalink(); ?>">
              <?php esc_html_e('Read more', 'bootscore'); ?>
            </a>

            <?php if ($atts['tags'] == 'true' && 'post' === get_post_type()) : ?>
              <div class="mt-2"><?= bootscore_tags(); ?></div>
            <?php endif; ?>

          </div>

        </article>

      </div>

      <?php endwhile; wp_reset_postdata(); ?>
    </div><!-- .row -->

<?php
  $myvariable = ob_get_clean();
  return $myvariable;
  }
}
