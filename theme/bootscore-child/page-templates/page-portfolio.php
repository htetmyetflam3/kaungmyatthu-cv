<?php
/**
 * Template Name: Portfolio
 * Template Post Type: page
 *
 * Layout shell for the portfolio CPT index. The bs Grid shortcode is
 * pasted into this page's content in the editor:
 *   [bs-grid type="portfolio" order="ASC" orderby="menu_order" posts="-1"]
 * so the query stays editable without touching PHP. The grid itself
 * renders through the child override at /bs-grid/sc-grid.php.
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

get_header();
?>

<main id="primary">

  <div class="container">

    <!-- Hero -->
    <header class="kmt-hero">
      <span class="kmt-eyebrow"><?= esc_html__('✦ Selected work', 'bootscore'); ?></span>
      <h1><?= esc_html__('Projects &', 'bootscore'); ?> <span class="grad"><?= esc_html__('clients.', 'bootscore'); ?></span></h1>
      <p class="kmt-hero-sub">
        <?php
        if (has_excerpt()) {
          echo esc_html(get_the_excerpt());
        } else {
          esc_html_e('Websites, content and systems built for real clients — from a Myanmar travel platform to an AI writing engine.', 'bootscore');
        }
        ?>
      </p>
      <div class="kmt-ctas">
        <a class="btn btn-primary-navy" href="mailto:htetmyet157@gmail.com?subject=Project%20inquiry"><?= esc_html__('Start a project', 'bootscore'); ?></a>
        <a class="btn btn-outline-kmt" href="<?= esc_url(get_stylesheet_directory_uri() . '/assets/pdf/Kaung-Myat-Thu-Portfolio.pdf'); ?>" download><?= esc_html__('Download Portfolio PDF', 'bootscore'); ?></a>
      </div>
    </header>

    <!-- Page content: the bs Grid shortcode is pasted here in the editor.
         Full-width when it contains a grid shortcode, narrow article
         column when it is plain prose. -->
    <?php
    while (have_posts()) :
      the_post();
      $kmt_raw = trim(get_the_content());
      if ($kmt_raw) :
        if (has_shortcode($kmt_raw, 'bs-grid') || has_shortcode($kmt_raw, 'bs-list') || has_shortcode($kmt_raw, 'bs-hero')) :
        ?>
          <div class="mb-4">
            <?php the_content(); ?>
          </div>
        <?php
        else :
        ?>
          <div class="kmt-article mb-4">
            <div class="kmt-article-body">
              <?php the_content(); ?>
            </div>
          </div>
        <?php
        endif;
      endif;
    endwhile;
    ?>

  </div><!-- .container -->

</main>

<?php
get_footer();
