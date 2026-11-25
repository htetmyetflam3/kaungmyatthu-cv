<?php

/**
 * The footer for our theme — KMT child override
 * Template Version: 1.0.0
 *
 * Three-column footer: brand · quick links · contact. No widget soup.
 *
 * @package Bootscore Child
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

?>

<?php do_action('bootscore_before_footer'); ?>

<footer id="footer" class="bootscore-footer">

  <div class="kmt-accent-line" aria-hidden="true"></div>

  <div class="kmt-footer-top">
    <div class="container">
      <div class="row g-4">

        <!-- Brand -->
        <div class="col-lg-4 col-md-6">
          <a class="footer-brand" href="<?= esc_url(home_url()); ?>">
            <img src="<?= esc_url(get_stylesheet_directory_uri() . '/assets/img/logo/logo.svg'); ?>" alt="<?= esc_attr(get_bloginfo('name')); ?>" width="26" height="26">
            <?= esc_html(get_bloginfo('name')); ?>
          </a>
          <p class="footer-tagline">
            <?= esc_html(get_bloginfo('description')); ?>
          </p>
        </div>

        <!-- Quick links: top-level pages -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-heading"><?= esc_html__('Explore', 'bootscore'); ?></div>
          <ul class="footer-links">
            <?php
            $kmt_pages = get_pages(array(
              'sort_column' => 'menu_order',
              'number'      => 8,
            ));
            if ($kmt_pages) :
              foreach ($kmt_pages as $kmt_page) :
            ?>
                <li><a href="<?= esc_url(get_permalink($kmt_page)); ?>"><?= esc_html($kmt_page->post_title); ?></a></li>
            <?php
              endforeach;
            endif;
            ?>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-heading"><?= esc_html__('Contact', 'bootscore'); ?></div>
          <ul class="footer-links">
            <li><a href="mailto:htetmyet157@gmail.com">htetmyet157@gmail.com</a></li>
            <li><a href="tel:+959955400017">+95 9 955 400017</a></li>
            <li><a href="mailto:htetmyet157@gmail.com?subject=Hire%20Me"><?= esc_html__('Hire me →', 'bootscore'); ?></a></li>
          </ul>
        </div>

        <!-- PDFs -->
        <div class="col-lg-2 col-md-6">
          <div class="footer-heading"><?= esc_html__('Downloads', 'bootscore'); ?></div>
          <ul class="footer-links">
            <li><a href="<?= esc_url(get_stylesheet_directory_uri() . '/assets/pdf/Kaung-Myat-Thu-CV.pdf'); ?>" download><?= esc_html__('CV (PDF)', 'bootscore'); ?></a></li>
            <li><a href="<?= esc_url(get_stylesheet_directory_uri() . '/assets/pdf/Kaung-Myat-Thu-Portfolio.pdf'); ?>" download><?= esc_html__('Portfolio (PDF)', 'bootscore'); ?></a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  <div class="bootscore-footer-info border-top py-3">
    <div class="container">
      <div class="small bootscore-copyright d-flex flex-wrap justify-content-between gap-2">
        <span><span class="cr-symbol">&copy;</span>&nbsp;<?= esc_html(date_i18n('Y')); ?> <?= esc_html(get_bloginfo('name')); ?></span>
        <span><?= esc_html__('North Okkalapa · Yangon', 'bootscore'); ?></span>
      </div>
    </div>
  </div>

</footer>

<!-- To top button -->
<a href="#" class="btn position-fixed zi-1000 top-button" role="button" aria-label="<?php esc_attr_e('Return to top', 'bootscore'); ?>"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i></a>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
