<?php
/**
 * The main blog index — KMT child override
 * Template Version: 1.0.0
 *
 * Used when Reading settings point "Posts page" here; hero + card grid.
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

get_header();
?>

<main id="primary">

  <div class="container">

    <header class="kmt-hero">
      <span class="kmt-eyebrow"><?= esc_html__('✦ Blog', 'bootscore'); ?></span>
      <h1><?= esc_html__('Notes &', 'bootscore'); ?> <span class="grad"><?= esc_html__('stories.', 'bootscore'); ?></span></h1>
      <p class="kmt-hero-sub"><?= esc_html__('Operations, writing, warehouses and the machines in between.', 'bootscore'); ?></p>
      <div class="kmt-hero-meta">
        <span><?= esc_html__('All posts', 'bootscore'); ?></span>
        <span class="dot"></span>
        <span><?= esc_html(sprintf('%d posts', (int) $GLOBALS['wp_query']->found_posts), 'bootscore'); ?></span>
      </div>
    </header>

    <?php
    if (have_posts()) :
      get_template_part('template-parts/kmt-post-grid', null, array('query' => $GLOBALS['wp_query']));
      bootscore_pagination();
    else :
      ?>
      <div class="kmt-archive-hero text-center">
        <h2 class="h4"><?= esc_html__('Nothing published yet.', 'bootscore'); ?></h2>
        <p class="kmt-archive-sub mx-auto"><?= esc_html__('Posts will appear here as soon as they go live.', 'bootscore'); ?></p>
      </div>
    <?php endif; ?>

  </div><!-- .container -->

</main>

<?php
get_footer();
