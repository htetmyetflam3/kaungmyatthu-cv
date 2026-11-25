<?php
/**
 * The single post template — KMT child override
 * Template Version: 1.0.0
 *
 * Editorial single view: centered header, cover, narrow article column,
 * tags, author box, prev/next nav, comments.
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
      $kmt_category = get_the_category();
      $kmt_cat      = $kmt_category ? $kmt_category[0] : null;
      ?>

      <article <?php post_class('kmt-single'); ?>>

        <!-- Header -->
        <header class="kmt-single-header">
          <div class="kmt-single-kicker">
            <?php if ($kmt_cat) : ?>
              <a class="badge" href="<?= esc_url(get_category_link($kmt_cat)); ?>"><?= esc_html($kmt_cat->name); ?></a>
            <?php endif; ?>
            <span class="kmt-single-date">
              <?= esc_html(get_the_date()); ?>
              <?php $kmt_rt = kmt_post_reading_time(); ?>
              <?php if ($kmt_rt) : ?>
                <span class="dot"></span><?= esc_html($kmt_rt); ?>
              <?php endif; ?>
            </span>
          </div>

          <h1><?= esc_html(get_the_title()); ?></h1>

          <div class="kmt-byline">
            <img class="kmt-byline-avatar"
              src="<?= esc_url(get_stylesheet_directory_uri() . '/assets/img/avatar/avatar.png'); ?>"
              alt="<?= esc_attr(get_the_author()); ?>" width="40" height="40">
            <div>
              <strong><?= esc_html(get_the_author()); ?></strong>
              <span><?= esc_html__('Web Developer · Content Writer · Translator', 'bootscore'); ?></span>
            </div>
          </div>
        </header>

        <!-- Cover -->
        <?php if (has_post_thumbnail()) : ?>
          <div class="kmt-single-cover">
            <?= get_the_post_thumbnail(get_the_ID(), 'full', array('alt' => esc_attr(get_the_title()))); ?>
          </div>
        <?php endif; ?>

        <!-- Body -->
        <div class="kmt-single-body">
          <?php the_content(); ?>
          <?php
          wp_link_pages(array(
            'before' => '<div class="page-links">' . esc_html__('Pages:', 'bootscore'),
            'after'  => '</div>',
          ));
          ?>
        </div>

        <!-- Footer: tags + author + post nav -->
        <footer class="kmt-single-footer">

          <?php if (has_tag()) : ?>
            <div class="kmt-tags">
              <?php the_tags('', ''); ?>
            </div>
          <?php endif; ?>

          <div class="kmt-author-box">
            <img src="<?= esc_url(get_stylesheet_directory_uri() . '/assets/img/avatar/avatar.png'); ?>"
              alt="<?= esc_attr(get_the_author()); ?>" width="64" height="64">
            <div>
              <p class="kmt-author-name"><?= esc_html(get_the_author()); ?></p>
              <p class="kmt-author-bio"><?= esc_html__('Web developer, content writer and translator in Yangon. I build sites, write technical copy and translate insurance work between English and Burmese.', 'bootscore'); ?></p>
              <div class="kmt-author-links">
                <a href="<?= esc_url(home_url('/cv/')); ?>"><?= esc_html__('Read the CV', 'bootscore'); ?> →</a>
                <a href="mailto:htetmyet157@gmail.com"><?= esc_html__('Get in touch', 'bootscore'); ?> →</a>
              </div>
            </div>
          </div>

          <!-- Prev / next -->
          <nav class="kmt-post-nav" aria-label="<?= esc_attr__('Post navigation', 'bootscore'); ?>">
            <?php
            $kmt_prev = get_previous_post();
            $kmt_next = get_next_post();
            if ($kmt_prev) :
            ?>
              <a class="kmt-post-nav-prev" href="<?= esc_url(get_permalink($kmt_prev)); ?>">
                <span class="kmt-post-nav-label"><?= esc_html__('Previous', 'bootscore'); ?></span>
                <span class="kmt-post-nav-title"><?= esc_html(get_the_title($kmt_prev)); ?></span>
              </a>
            <?php else : ?>
              <span></span>
            <?php endif; ?>
            <?php if ($kmt_next) : ?>
              <a class="kmt-post-nav-next" href="<?= esc_url(get_permalink($kmt_next)); ?>">
                <span class="kmt-post-nav-label"><?= esc_html__('Next', 'bootscore'); ?></span>
                <span class="kmt-post-nav-title"><?= esc_html(get_the_title($kmt_next)); ?></span>
              </a>
            <?php endif; ?>
          </nav>

        </footer>

      </article>

      <?php
      if (comments_open() || get_comments_number()) {
        comments_template();
      }
    endwhile;
    ?>

  </div><!-- .container -->

</main>

<?php
get_footer();
