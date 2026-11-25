<?php

/**
 * The header for our theme — KMT child override
 * Template Version: 1.0.0
 *
 * Brand: logo mark + site title. Nav from main-menu, Hire me CTA.
 *
 * @package Bootscore Child
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?= esc_attr(get_bloginfo('charset')); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<div id="page" class="site">

  <!-- Skip Links -->
  <a class="skip-link visually-hidden-focusable" href="#primary"><?php esc_html_e('Skip to content', 'bootscore'); ?></a>
  <a class="skip-link visually-hidden-focusable" href="#footer"><?php esc_html_e('Skip to footer', 'bootscore'); ?></a>

  <?php do_action('bootscore_before_masthead'); ?>

  <header id="masthead" class="sticky-top site-header">

    <?php do_action('bootscore_after_masthead_open'); ?>

    <nav id="nav-main" class="navbar navbar-expand-lg">
      <div class="container">

        <?php do_action('bootscore_before_navbar_brand'); ?>

        <!-- Navbar Brand: mark + wordmark -->
        <a class="navbar-brand" href="<?= esc_url(home_url()); ?>">
          <img src="<?= esc_url(get_stylesheet_directory_uri() . '/assets/img/logo/logo.svg'); ?>" alt="<?= esc_attr(get_bloginfo('name')); ?>" width="30" height="30">
          <span class="brand-text"><?= esc_html(get_bloginfo('name')); ?></span>
        </a>

        <?php do_action('bootscore_after_navbar_brand'); ?>

        <!-- Offcanvas Navbar -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-navbar">
          <div class="offcanvas-header">
            <span class="h5 offcanvas-title"><?= esc_html(get_bloginfo('name')); ?></span>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">

            <!-- Bootstrap 5 Nav Walker Main Menu -->
            <?php get_template_part('template-parts/header/main-menu'); ?>

            <!-- Mobile CTA -->
            <a class="btn btn-primary-navy d-lg-none mt-3 w-100" href="mailto:htetmyet157@gmail.com?subject=Hire%20Me">
              <?= esc_html__('Hire Me', 'bootscore'); ?>
            </a>

          </div>
        </div>

        <div class="header-actions d-flex align-items-center">

          <!-- Desktop CTA -->
          <a class="btn btn-primary-navy d-none d-lg-inline-flex me-2" href="mailto:htetmyet157@gmail.com?subject=Hire%20Me">
            <?= esc_html__('Hire Me', 'bootscore'); ?>
          </a>

          <!-- Navbar Toggler -->
          <button class="btn btn-outline-kmt d-lg-none nav-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar" aria-label="<?php esc_attr_e('Toggle main menu', 'bootscore'); ?>">
            <i class="fa-solid fa-bars"></i> <span class="visually-hidden-focusable">Menu</span>
          </button>

          <?php do_action('bootscore_after_nav_toggler'); ?>

        </div><!-- .header-actions -->

      </div><!-- .container -->
    </nav><!-- .navbar -->

    <!-- Accent gradient line -->
    <div class="kmt-accent-line" aria-hidden="true"></div>

    <?php do_action('bootscore_before_masthead_close'); ?>

  </header><!-- #masthead -->

  <?php do_action('bootscore_after_masthead'); ?>
