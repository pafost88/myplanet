<?php /* Template Name: Homepage Template */ ?>
<?php
  $icon = '<div class="icon arrowupright"></div>'
?>
<?php get_header(); ?>

  <main>

    <section class="section scroll-down">
      <div class="scroll-down-block">
        <a class="scroll-down-link" href="<?php echo get_field('hero_scroll_down')['url']; ?>" target="<?php echo get_field('hero_scroll_down')['target']; ?>">
          <?php echo get_field('hero_scroll_down')['title']; ?><div class="icon anim arrow-down"></div>
        </a>
      </div>
    </section>

    <section class="section hero sample-header">
      <div class="sample-header-section">
        <div class="container">
          <div class="col-12">
            <div class="hero-block">
              <div class="hero-content">
                <div class="hero-title">
                  <h1>
                    <?php the_field('hero_title'); ?><span class="yellow"><?php the_field('hero_title_span'); ?></span>
                  </h1>
                </div>
                <div class="hero-description">
                  <p>
                    <?php the_field('hero_description'); ?>
                  </p>
                </div>
                <div class="hero-link">
                  <a href="<?php echo get_field('hero_scroll_down')['url']; ?>" target="<?php echo get_field('hero_scroll_down')['target']; ?>">
                    <?php echo get_field('hero_scroll_down')['title']; ?><div class="icon anim arrow-down"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sample-section-wrap">
      <div class="sample-section">
        
        <section class="section video">
            <!-- <iframe src="https://www.youtube.com/embed/mnuPj1japoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe src="https://player.vimeo.com/video/720824070?h=72686321fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Comp 1_1.mp4"></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <!-- <?php the_field('main_video'); ?> -->
        </section>

        <section class="section project-list">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h1>
                    <?php the_field('our_work_title'); ?><span class="yellow"><?php the_field('our_work_title_span'); ?></span>
                  </h1>
                </div>
                <div class="section-description">
                  <p>
                    <?php the_field('our_work_description'); ?>
                  </p>
                </div>
                <div class="section-button">
                  <a href="<?php echo get_field('our_work_button')['url']; ?>" target="<?php echo get_field('our_work_button')['target']; ?>">
                    <button class="button">
                      <?php echo get_field('our_work_button')['title']; ?>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container nopm">
            <div class="row">
              <div class="col-12">
                <?php if( have_rows('our_work_block_repeater') ): ?>
                  <div class="row">
                    <?php while ( have_rows('our_work_block_repeater') ) : the_row(); ?>

                      <?php if( have_rows('left_repeater') ): ?>
                        <?php while ( have_rows('left_repeater') ) : the_row(); ?>
                          <div class="project-block">
                            <div class="col-12">
                              <div class="row">
                                <div class="col-xxl-6 col-lg-6 col-md-6 second">
                                  <div class="project-content-block">
                                    <div class="title-block">
                                      <h1><?php echo get_sub_field('title'); ?></h1>
                                    </div>
                                    <div class="description-block">
                                      <p>
                                        <?php echo get_sub_field('desc'); ?>
                                      </p>
                                    </div>
                                    <?php if( have_rows('tegs_repeater') ): ?>
                                      <div class="tags-block">
                                        <?php while ( have_rows('tegs_repeater') ) : the_row(); ?>
                                          <div class="tag">
                                            <p><?php echo get_sub_field('tag'); ?></p>
                                          </div>
                                        <?php endwhile; ?>
                                      </div>
                                    <?php endif; ?>
                                    <div class="section-button">
                                      <a href="<?php echo get_sub_field('work_link')['url']; ?>" target="<?php echo get_sub_field('work_link')['target']; ?>">
                                        <button class="button work-link">
                                          <?php echo get_sub_field('work_link')['title']; ?>
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xxl-6 col-lg-6 col-md-6 first">
                                  <div class="project-image-block">
                                    <div class="content">
                                      <img src="<?php echo get_sub_field('image_left')['url']; ?>" alt="<?php echo get_sub_field('image_left')['alt']; ?>" />
                                      <div class="img-text">
                                        <a href="<?php echo get_sub_field('link_hover')['url']; ?>" target="<?php echo get_sub_field('link_hover')['target']; ?>">
                                          <?php echo get_sub_field('link_hover')['title']; ?><div class="icon arrowupright"></div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        <?php endwhile; ?>
                      <?php endif; ?>

                      <?php if( have_rows('right_repeater') ): ?>
                        <?php while ( have_rows('right_repeater') ) : the_row(); ?>
                          <div class="project-block">
                            <div class="col-12">
                              <div class="row">
                                <div class="col-xxl-6 col-lg-6 col-md-6 first">
                                  <div class="project-image-block">
                                    <div class="content">
                                      <img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['alt']; ?>" />
                                      <div class="img-text">
                                        <a href="<?php echo get_sub_field('link_hover')['url']; ?>" target="<?php echo get_sub_field('link_hover')['target']; ?>">
                                          <?php echo get_sub_field('link_hover')['title']; ?><div class="icon arrowupright"></div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xxl-6 col-lg-6 col-md-6 second">
                                  <div class="project-content-block left">
                                    <div class="title-block">
                                      <h1><?php echo get_sub_field('title'); ?></h1>
                                    </div>
                                    <div class="description-block">
                                      <p>
                                        <?php echo get_sub_field('desc'); ?>
                                      </p>
                                    </div>
                                    <?php if( have_rows('tegs_repeater') ): ?>
                                        <div class="tags-block">
                                          <?php while ( have_rows('tegs_repeater') ) : the_row(); ?>
                                            <div class="tag">
                                              <p><?php echo get_sub_field('tag'); ?></p>
                                            </div>
                                          <?php endwhile; ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="section-button">
                                      <a href="<?php echo get_sub_field('work_link')['url']; ?>" target="<?php echo get_sub_field('work_link')['target']; ?>">
                                        <button class="button work-link">
                                          <?php echo get_sub_field('work_link')['title']; ?>
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        <?php endwhile; ?>
                      <?php endif; ?>

                    <?php endwhile; ?>
                  </div>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </section>

        <section class="section trusted">
          <div class="container">
            <div class="row">
              <div class="trusted-block">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12">
                      <div class="trusted-content">
                        <div class="section-title">
                          <h1>
                            <?php the_field('trusted_by_title'); ?><span class="yellow"><?php the_field('trusted_by_title_span'); ?></span>
                          </h1>
                        </div>
                        <div class="section-description">
                          <p><?php the_field('trusted_by_description'); ?></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <?php if( have_rows('trusted_by_slider_repeater') ): ?>
                      <div class="simple-slider">
                        <?php while ( have_rows('trusted_by_slider_repeater') ) : the_row(); ?>
                          <div class="simple-slider-block">
                            <div class="slider-img-block">
                              <img src="<?php echo get_sub_field('slider_image')['url']; ?>" alt="<?php echo get_sub_field('slider_image')['alt']; ?>" />
                            </div>
                          </div>
                        <?php endwhile; ?>
                      </div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section feedback">
          <div class="container">
            <div class="row">
              <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div class="feedback-slider-block">
                  <div class="row">
                    <?php if( have_rows('feedback_repeater') ): ?>
                      <div class="feedback-sliderjs">
                        <?php while ( have_rows('feedback_repeater') ) : the_row(); ?>
                          <div class="feedback-content">
                            <div class="slider-block">
                              <div class="slider-content">
                                <div class="section-description">
                                  <div class="block-icon">
                                    <div class="icon dots-up"></div>
                                  </div>
                                  <div class="block-text">
                                    <div class="description">
                                      <p>
                                        <?php the_sub_field('description'); ?>
                                      </p>
                                    </div>
                                    <?php if( get_sub_field('case_study_link') ): ?>
                                      <div class="block-link">
                                        <a href="<?php echo get_sub_field('case_study_link')['url']; ?>" target="<?php echo get_sub_field('case_study_link')['target']; ?>">
                                          <?php echo get_sub_field('case_study_link')['title']; ?><img class="galochka" src="<?php echo get_sub_field('galochka')['url']; ?>" alt="<?php echo get_sub_field('galochka')['alt']; ?>" />
                                        </a>
                                      </div>
                                    <?php endif; ?>
                                    <div class="section-feedback">
                                      <div class="img-block">
                                        <img src="<?php echo get_sub_field('face_icon')['url']; ?>" alt="<?php echo get_sub_field('face_icon')['alt']; ?>" />
                                      </div>
                                      <div class="title-and-desc">
                                        <div class="title">
                                          <h3>
                                            <?php the_sub_field('name'); ?>
                                          </h3>
                                        </div>
                                        <div class="desc">
                                          <p>
                                            <?php the_sub_field('rank'); ?>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        <?php endwhile; ?>
                      </div>
                    <?php endif; ?>
                  </div>

                  <div class="slider-button-block">
                    <div class="icon-block" id="prev">
                      <div class="icon slideral"></div>
                    </div>
                    <div class="icon-block" id="next">
                      <div class="icon sliderar"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>

  </main>

<?php get_footer(); ?>