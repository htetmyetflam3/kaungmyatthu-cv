<?php
/**
 * Archive (category, tag, date, author) — KMT child override
 * Template Version: 1.0.0
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

get_header();
?>

<main id="primary">

  <div class="container">

    <header class="kmt-archive-hero">
      <span class="kmt-eyebrow"><?= esc_html__('✦ Archive', 'bootscore'); ?></span>
      <h1>
        <?php
        if (is_category()) {
          single_cat_title();
        } elseif (is_tag()) {
          single_tag_title();
        } elseif (is_author()) {
          the_author();
        } elseif (is_year()) {
          esc_html(the_date('Y'));
        } elseif (is_month()) {
          esc_html(the_date('F Y'));
        } else {
          esc_html_e('Archive', 'bootscore');
        }
        ?>
      </h1>
      <?php the_archive_description('<p class="kmt-archive-sub">', '</p>'); ?>
    </header>

    <?php
    if (have_posts()) :
      get_template_part('template-parts/kmt-post-grid', null, array('query' => $GLOBALS['wp_query']));
      bootscore_pagination();
    else :
      ?>
      <div class="kmt-archive-hero text-center">
        <h2 class="h4"><?= esc_html__('Nothing in this archive.', 'bootscore'); ?></h2>
      </div>
    <?php endif; ?>

  </div><!-- .container -->

</main>

<?php
get_footer();
