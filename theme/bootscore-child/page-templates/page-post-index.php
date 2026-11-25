<?php
/**
 * Template Name: Post Index
 * Template Post Type: page
 *
 * Parent page that archives every blog post: featured lead card + grid of
 * post cards, category filter pills, Bootscore pagination.
 *
 * @package Bootscore Child
 */

defined('ABSPATH') || exit;

get_header();

$kmt_paged = max(1, (int) get_query_var('paged'), (int) get_query_var('page'));

$kmt_posts = new WP_Query(array(
  'post_type'           => 'post',
  'post_status'         => 'publish',
  'paged'               => $kmt_paged,
  'posts_per_page'      => (int) get_option('posts_per_page', 10),
  'ignore_sticky_posts' => false,
));

$kmt_categories = get_categories(array(
  'hide_empty' => true,
  'orderby'    => 'count',
  'order'      => 'DESC',
));

$kmt_active_cat = isset($_GET['kmt_cat']) ? sanitize_key(wp_unslash($_GET['kmt_cat'])) : '';

// Category filter changes the query above
if ($kmt_active_cat) {
  $kmt_posts->set('cat', (int) $kmt_active_cat);
  $kmt_posts->query($kmt_posts->query_vars);
}

$kmt_first = ($kmt_paged === 1 && !$kmt_active_cat && $kmt_posts->have_posts()) ? $kmt_posts->posts[0] : null;
$kmt_offset = $kmt_first ? 1 : 0;
?>

<main id="primary">

  <div class="container">

    <!-- Hero -->
    <header class="kmt-hero">
      <span class="kmt-eyebrow"><?= esc_html__('✦ Blog', 'bootscore'); ?></span>
      <h1><?= esc_html__('Notes &', 'bootscore'); ?> <span class="grad"><?= esc_html__('stories.', 'bootscore'); ?></span></h1>
      <p class="kmt-hero-sub">
        <?php
        if (has_excerpt()) {
          echo esc_html(get_the_excerpt());
        } else {
          esc_html_e('Operations, writing, warehouses and the machines in between.', 'bootscore');
        }
        ?>
      </p>
      <div class="kmt-hero-meta">
        <span><?= esc_html__('All posts', 'bootscore'); ?></span>
        <span class="dot"></span>
        <span><?= esc_html(sprintf('%d posts', (int) $kmt_posts->found_posts), 'bootscore'); ?></span>
      </div>
    </header>

    <!-- Category pills -->
    <?php if ($kmt_categories) : ?>
      <nav class="kmt-filter-pills" aria-label="<?= esc_attr__('Filter by category', 'bootscore'); ?>">
        <a href="<?= esc_url(remove_query_arg('kmt_cat')); ?>" class="<?= $kmt_active_cat ? '' : 'active'; ?>">
          <?= esc_html__('All', 'bootscore'); ?>
        </a>
        <?php foreach ($kmt_categories as $kmt_cat) : ?>
          <a href="<?= esc_url(add_query_arg('kmt_cat', $kmt_cat->term_id, remove_query_arg('kmt_cat'))); ?>"
            class="<?= (string) $kmt_active_cat === (string) $kmt_cat->term_id ? 'active' : ''; ?>">
            <?= esc_html($kmt_cat->name); ?>
            <span class="opacity-50"><?= (int) $kmt_cat->count; ?></span>
          </a>
        <?php endforeach; ?>
      </nav>
    <?php endif; ?>

    <!-- Featured (first) post -->
    <?php if ($kmt_first) : ?>
      <?php setup_postdata($kmt_first); ?>
      <article class="kmt-featured-post mb-4">
        <a class="kmt-featured-media" href="<?= esc_url(get_permalink($kmt_first)); ?>">
          <?php if (has_post_thumbnail($kmt_first)) : ?>
            <?= get_the_post_thumbnail($kmt_first, 'large', array('alt' => esc_attr(get_the_title($kmt_first)))); ?>
          <?php else : ?>
            <span><?= esc_html(mb_substr(get_the_title($kmt_first), 0, 1)); ?></span>
          <?php endif; ?>
        </a>
        <div class="kmt-featured-body">
          <div class="kmt-card-kicker">
            <span><?= esc_html__('Featured', 'bootscore'); ?></span>
            <span class="kmt-card-date"><?= esc_html(get_the_date('', $kmt_first)); ?></span>
          </div>
          <h2><a href="<?= esc_url(get_permalink($kmt_first)); ?>"><?= esc_html(get_the_title($kmt_first)); ?></a></h2>
          <p><?= esc_html(wp_trim_words(get_the_excerpt($kmt_first), 34)); ?></p>
          <a class="kmt-card-more" href="<?= esc_url(get_permalink($kmt_first)); ?>"><?= esc_html__('Read the article', 'bootscore'); ?></a>
        </div>
      </article>
      <?php wp_reset_postdata(); ?>
    <?php endif; ?>

    <!-- Grid -->
    <?php
    $kmt_grid = new WP_Query(array(
      'post_type'           => 'post',
      'post_status'         => 'publish',
      'paged'               => $kmt_paged,
      'posts_per_page'      => (int) get_option('posts_per_page', 10),
      'offset'              => $kmt_offset,
      'ignore_sticky_posts' => false,
    ));
    if ($kmt_active_cat) {
      $kmt_grid->set('cat', (int) $kmt_active_cat);
      $kmt_grid->query($kmt_grid->query_vars);
    }
    if ($kmt_grid->have_posts()) :
      ?>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 kmt-post-grid mb-4">
        <?php
        while ($kmt_grid->have_posts()) :
          $kmt_grid->the_post();
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
        ?>
      </div>
      <?php
      wp_reset_postdata();
    else :
      wp_reset_postdata();
      ?>
      <div class="kmt-archive-hero text-center">
        <h2 class="h4"><?= esc_html__('Nothing published yet.', 'bootscore'); ?></h2>
        <p class="kmt-archive-sub mx-auto"><?= esc_html__('Posts will appear here as soon as they go live.', 'bootscore'); ?></p>
      </div>
    <?php endif; ?>

    <!-- Pagination -->
    <?php
    $kmt_max_pages = (int) $kmt_posts->max_num_pages;
    wp_reset_postdata();
    if ($kmt_max_pages > 1) :
      $kmt_pagination_base = str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999, false)));
      ?>
      <nav aria-label="<?= esc_attr__('Posts pagination', 'bootscore'); ?>">
        <ul class="pagination justify-content-center">
          <li class="page-item <?= $kmt_paged <= 1 ? 'disabled' : ''; ?>">
            <a class="page-link" href="<?= esc_url($kmt_paged > 1 ? str_replace('%#%', $kmt_paged - 1, $kmt_pagination_base) : '#'); ?>">&laquo;</a>
          </li>
          <?php for ($kmt_i = 1; $kmt_i <= $kmt_max_pages; $kmt_i++) : ?>
            <li class="page-item <?= $kmt_i === $kmt_paged ? 'active' : ''; ?>">
              <a class="page-link" href="<?= esc_url(str_replace('%#%', $kmt_i, $kmt_pagination_base)); ?>"><?= (int) $kmt_i; ?></a>
            </li>
          <?php endfor; ?>
          <li class="page-item <?= $kmt_paged >= $kmt_max_pages ? 'disabled' : ''; ?>">
            <a class="page-link" href="<?= esc_url($kmt_paged < $kmt_max_pages ? str_replace('%#%', $kmt_paged + 1, $kmt_pagination_base) : '#'); ?>">&raquo;</a>
          </li>
        </ul>
      </nav>
    <?php endif; ?>

  </div><!-- .container -->

</main>

<?php
get_footer();
