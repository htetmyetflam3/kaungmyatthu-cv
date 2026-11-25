<?php
/**
 * Template Name: CV
 * Template Post Type: page
 *
 * Full CV page: profile hero + sticky section nav + card sections.
 * Section content lives in the page editor; nav is built from .cv-section[id].
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

get_header();
?>

<main id="primary" class="kmt-cv-page">

  <!-- Accent line -->
  <div class="kmt-accent-line" aria-hidden="true"></div>

  <!-- Profile hero -->
  <div class="kmt-profile">
    <img src="<?= esc_url(get_stylesheet_directory_uri() . '/assets/img/avatar/avatar.png'); ?>"
      alt="<?= esc_attr(get_bloginfo('name')); ?>" class="avatar" width="96" height="96">

    <h1 class="profile-name"><?= esc_html(get_bloginfo('name')); ?></h1>

    <div class="profile-role"><?= esc_html__('Web Developer · Content Writer · Translator', 'bootscore'); ?></div>

    <div class="profile-meta">
      <a href="tel:+959955400017">+95 9 955 400017</a>
      <span class="sep">·</span>
      <a href="mailto:htetmyet157@gmail.com">htetmyet157@gmail.com</a>
      <span class="sep">·</span>
      <?= esc_html__('North Okkalapa, Yangon', 'bootscore'); ?>
    </div>

    <div class="profile-meta" style="font-size:.88rem;margin-top:6px">
      <?= esc_html__('DOB: June 8, 1996', 'bootscore'); ?><span class="sep">·</span>
      <?= esc_html__('English Language: Level B2', 'bootscore'); ?><span class="sep">·</span>
      <?= esc_html__('Basic Skills: HTML, CSS, PHP, JS', 'bootscore'); ?>
    </div>

    <div class="btn-row">
      <a class="btn btn-primary-navy" href="mailto:htetmyet157@gmail.com?subject=Hire%20Me"><?= esc_html__('Hire Me', 'bootscore'); ?></a>
      <a class="btn btn-outline-kmt" href="tel:+959955400017"><?= esc_html__('Call Me', 'bootscore'); ?></a>
      <a class="btn btn-outline-kmt" href="<?= esc_url(home_url('/portfolio/')); ?>"><?= esc_html__('Portfolio', 'bootscore'); ?></a>
      <a class="btn btn-outline-kmt" href="<?= esc_url(get_stylesheet_directory_uri() . '/assets/pdf/Kaung-Myat-Thu-CV.pdf'); ?>" download><?= esc_html__('Download CV (PDF)', 'bootscore'); ?></a>
      <a class="btn btn-outline-kmt" href="<?= esc_url(get_stylesheet_directory_uri() . '/assets/pdf/Kaung-Myat-Thu-Portfolio.pdf'); ?>" download><?= esc_html__('Download Portfolio PDF', 'bootscore'); ?></a>
      <button class="btn btn-outline-kmt js-print" type="button"><?= esc_html__('Print / Save PDF', 'bootscore'); ?> <i class="fa-solid fa-print ms-1" aria-hidden="true"></i></button>
    </div>
  </div>

  <!-- Sticky section nav — links injected from .cv-section[id] by custom.js -->
  <nav class="kmt-cv-navbar" aria-label="<?= esc_attr__('CV sections', 'bootscore'); ?>">
    <div class="bar-inner">
      <span class="bar-label"><?= esc_html__('Contents', 'bootscore'); ?></span>
      <div class="nav-scroll">
        <ul id="kmt-cv-nav" class="nav"></ul>
      </div>
    </div>
  </nav>

  <!-- CV body: page content holds the sections -->
  <div class="kmt-col-wrap">
    <?php
    while (have_posts()) :
      the_post();
      the_content();
    endwhile;
    ?>
  </div>

</main>

<?php
get_footer();
