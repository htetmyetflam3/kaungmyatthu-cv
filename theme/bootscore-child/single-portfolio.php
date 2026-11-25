<?php
/**
 * Single portfolio project — KMT child
 * Template Version: 1.0.0
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

get_header();
?>

<main id="primary">

  <div class="container">

    <?php
    while (have_posts()) :
      the_post();
      $kmt_kicker = get_post_meta(get_the_ID(), '_kmt_kicker', true);
      ?>

      <article <?php post_class('kmt-work-single'); ?>>

        <header class="kmt-hero">
          <a class="kmt-eyebrow text-decoration-none" href="<?= esc_url(home_url('/portfolio/')); ?>">← <?= esc_html__('Back to projects', 'bootscore'); ?></a>
          <?php if ($kmt_kicker) : ?>
            <div class="kmt-hero-meta mb-2"><span><?= esc_html($kmt_kicker); ?></span><span class="dot"></span><span><?= esc_html(get_the_date()); ?></span></div>
          <?php endif; ?>
          <h1><?= esc_html(get_the_title()); ?></h1>
        </header>

        <?php if (has_post_thumbnail()) : ?>
          <div class="kmt-single-cover" style="max-width:960px">
            <?= get_the_post_thumbnail(get_the_ID(), 'full', array('alt' => esc_attr(get_the_title()))); ?>
          </div>
        <?php endif; ?>

        <div class="kmt-single-body">
          <?php the_content(); ?>
        </div>

        <footer class="kmt-single-footer">
          <div class="kmt-author-box">
            <img src="<?= esc_url(get_stylesheet_directory_uri() . '/assets/img/avatar/avatar.png'); ?>"
              alt="<?= esc_attr(get_bloginfo('name')); ?>" width="64" height="64">
            <div>
              <p class="kmt-author-name"><?= esc_html__('Like what you see?', 'bootscore'); ?></p>
              <p class="kmt-author-bio"><?= esc_html__('Tell me about your project — I reply within one business day.', 'bootscore'); ?></p>
              <div class="kmt-author-links">
                <a href="mailto:htetmyet157@gmail.com?subject=Project%20inquiry"><?= esc_html__('Start a project', 'bootscore'); ?> →</a>
                <a href="<?= esc_url(home_url('/portfolio/')); ?>"><?= esc_html__('All projects', 'bootscore'); ?> →</a>
              </div>
            </div>
          </div>
        </footer>

      </article>

      <?php
    endwhile;
    ?>

  </div><!-- .container -->

</main>

<?php
get_footer();
