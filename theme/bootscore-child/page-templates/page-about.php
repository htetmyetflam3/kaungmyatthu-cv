<?php
/**
 * Template Name: About
 * Template Post Type: page
 *
 * Editorial about page: hero with gradient title, stat strip, article body
 * in a narrow column, "keep reading" links.
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

get_header();

// Optional "keep reading" targets — any two other pages
$kmt_keep_cv     = get_page_by_path('cv');
$kmt_keep_folio  = get_page_by_path('portfolio');
?>

<main id="primary">

  <div class="container">

    <!-- Hero -->
    <header class="kmt-hero">
      <span class="kmt-eyebrow"><?= esc_html__('✦ Personal site', 'bootscore'); ?></span>
      <h1><?= esc_html__('About', 'bootscore'); ?> <span class="grad"><?= esc_html__('me.', 'bootscore'); ?></span></h1>
      <p class="kmt-hero-sub">
        <?= esc_html__('A short record of the years behind the numbers, the work and the stories.', 'bootscore'); ?>
      </p>
      <div class="kmt-hero-meta">
        <span><?= esc_html__('Kaung Myat Thu', 'bootscore'); ?></span>
        <span class="dot"></span>
        <span><?= esc_html__('May 2026', 'bootscore'); ?></span>
        <span class="dot"></span>
        <span><?= esc_html__('5 min read', 'bootscore'); ?></span>
      </div>
    </header>

    <!-- Stat strip -->
    <div class="kmt-stat-strip">
      <div class="kmt-stat">
        <div class="kmt-stat-num">157K → 298K <span class="accent">+90%</span></div>
        <p class="kmt-stat-label"><?= esc_html__('Followers, 321 Ecolife', 'bootscore'); ?></p>
      </div>
      <div class="kmt-stat">
        <div class="kmt-stat-num">4 <span class="accent">months</span></div>
        <p class="kmt-stat-label"><?= esc_html__('Built my car-parts POS from scratch', 'bootscore'); ?></p>
      </div>
      <div class="kmt-stat">
        <div class="kmt-stat-num">3 <span class="accent">careers</span></div>
        <p class="kmt-stat-label"><?= esc_html__('NGO · 321 Ecolife · NPT Group', 'bootscore'); ?></p>
      </div>
      <div class="kmt-stat">
        <div class="kmt-stat-num">Live <span class="accent">project</span></div>
        <p class="kmt-stat-label"><?= esc_html__('Myangustis — Burmese text engine', 'bootscore'); ?></p>
      </div>
    </div>

    <!-- Article -->
    <div class="kmt-article">
      <div class="kmt-article-body">
        <?php
        while (have_posts()) :
          the_post();
          the_content();
        endwhile;
        ?>
      </div>

      <!-- Keep reading -->
      <div class="kmt-keep-reading">
        <span class="b-rel-title"><?= esc_html__('Keep reading', 'bootscore'); ?></span>
        <div class="b-rel-links">
          <?php if ($kmt_keep_cv) : ?>
            <a href="<?= esc_url(get_permalink($kmt_keep_cv)); ?>">
              <?= esc_html__('Resume', 'bootscore'); ?>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9"></path></svg>
            </a>
          <?php endif; ?>
          <?php if ($kmt_keep_folio) : ?>
            <a href="<?= esc_url(get_permalink($kmt_keep_folio)); ?>">
              <?= esc_html__('Portfolio', 'bootscore'); ?>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9"></path></svg>
            </a>
          <?php endif; ?>
        </div>
      </div>
    </div>

  </div><!-- .container -->

</main>

<?php
get_footer();
