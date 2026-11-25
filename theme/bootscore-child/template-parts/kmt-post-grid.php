<?php
/**
 * Post card grid — expects $args['query'] (WP_Query).
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

$kmt_query = isset($args['query']) ? $args['query'] : $GLOBALS['wp_query'];

if (!$kmt_query instanceof WP_Query || !$kmt_query->have_posts()) {
  return;
}
?>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 kmt-post-grid mb-4">
  <?php
  while ($kmt_query->have_posts()) :
    $kmt_query->the_post();
    ?>
    <div class="col">
      <article <?php post_class('card'); ?>>
        <a href="<?= esc_url(get_permalink()); ?>">
          <?php if (has_post_thumbnail()) : ?>
            <?= get_the_post_thumbnail(get_the_ID(), 'medium_large', array('class' => 'card-img-top', 'alt' => esc_attr(get_the_title()))); ?>
          <?php else : ?>
            <div class="kmt-thumb-placeholder"><?= esc_html(mb_substr(get_the_title(), 0, 1)); ?></div>
          <?php endif; ?>
        </a>
        <div class="card-body">
          <div class="kmt-card-kicker">
            <span><?= wp_kses_post(get_the_category_list(', ') ?: esc_html__('Uncategorized', 'bootscore')); ?></span>
            <span class="kmt-card-date"><?= esc_html(get_the_date()); ?></span>
          </div>
          <h2 class="card-title h5"><a href="<?= esc_url(get_permalink()); ?>"><?= esc_html(get_the_title()); ?></a></h2>
          <p class="card-text"><?= esc_html(get_the_excerpt()); ?></p>
          <a class="kmt-card-more" href="<?= esc_url(get_permalink()); ?>"><?= esc_html__('Read more', 'bootscore'); ?></a>
        </div>
      </article>
    </div>
  <?php
  endwhile;
  wp_reset_postdata();
  ?>
</div>
