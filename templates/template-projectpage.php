<?php /* Template Name: Project Page Template */ ?>
<?php get_header(); ?>

  <main>

      <section class="main-p">
        <div class="container">
          <div class="row">
            <div class="content">
              <div class="col-12">
                <div class="section-title">
                  <h3><?php the_field('first_title'); ?></h3>
                </div>
                <div class="section-description">
                  <h2>
                    <?php the_field('first_description'); ?>
                  </h2>
                </div>
              </div>
              <div class="col-12">
                <div class="section-img">
                  <img src="<?php echo get_field('first_image')['url']; ?>" alt="<?php echo get_field('first_image')['alt']; ?>" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-p">
        <div class="container">
          <div class="row center">
            <div class="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12">
              <div class="row">
                <div class="ps-block">
                  <div class="col-12">
                    <div class="main-title">
                      <div class="section-title">
                        <h4><?php the_field('second_title'); ?></h4>
                      </div>
                    </div>
                  </div>
                  <?php if( have_rows('second_fivextwo_first') ): ?>
                    <?php while ( have_rows('second_fivextwo_first') ) : the_row(); ?>
                      <div class="content">
                        <div class="col-12">
                          <?php if( have_rows('repeater_block') ): ?>
                            <div class="row">
                              <?php while ( have_rows('repeater_block') ) : the_row(); ?>
                                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                  <div class="ps-content">
                                    <div class="title-block">
                                      <h4><?php the_sub_field('title'); ?></h4>
                                    </div>
                                    <div class="description-block">
                                      <p><?php the_sub_field('desc'); ?></p>
                                    </div>
                                  </div>
                                </div>
                              <?php endwhile; ?>
                            </div>
                          <?php endif; ?>
                        </div>
                      </div>
                    <?php endwhile; ?>
                  <?php endif; ?>
                  <div class="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12">
                    <div class="paragraf">
                      <p>
                        <?php the_field('second_description'); ?>
                      </p>
                    </div>
                  </div>
                  <?php if( have_rows('second_fivextwo_second') ): ?>
                    <?php while ( have_rows('second_fivextwo_second') ) : the_row(); ?>
                      <div class="content">
                        <div class="col-12">
                          <?php if( have_rows('repeater_block') ): ?>
                            <div class="row">
                              <?php while ( have_rows('repeater_block') ) : the_row(); ?>
                                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                  <div class="ps-content">
                                    <div class="title-block">
                                      <h4><?php the_sub_field('title'); ?></h4>
                                    </div>
                                    <div class="description-block">
                                      <p><?php the_sub_field('desc'); ?></p>
                                    </div>
                                  </div>
                                </div>
                              <?php endwhile; ?>
                            </div>
                          <?php endif; ?>
                        </div>
                      </div>
                    <?php endwhile; ?>
                  <?php endif; ?>
                  <div class="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12">
                    <div class="h4text-block">
                      <h4>
                        <?php the_field('second_description__two'); ?>
                      </h4>
                    </div>
                  </div>

                  <?php if( have_rows('secont_block_info_repeater') ): ?>
                    <div class="info-mini-section">
                      <?php while ( have_rows('secont_block_info_repeater') ) : the_row(); ?>
                        <div class="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12">
                          <div class="info-block">
                            <div class="section-title">
                              <h4>
                                <?php the_sub_field('title'); ?>
                              </h4>
                            </div>
                            <div class="section-decription">
                              <p>
                                <?php the_sub_field('desc'); ?>
                              </p>
                            </div>
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

      <section class="video-p">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="video-block">
                <!-- <iframe src="https://www.youtube.com/embed/bh3vV_-xYuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <?php the_field('video'); ?>
              </div>
            </div>
          </div>
        </div>
      </section>

      <?php if( have_rows('third_repeater') ): ?>
        <?php while ( have_rows('third_repeater') ) : the_row(); ?>
          <section class="info-section">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="row center">
                    <div class="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12">
                      <div class="content">
                        <div class="section-title">
                          <h2>
                            <?php the_sub_field('title'); ?>
                          </h2>
                        </div>
                        <div class="section-description">
                          <p>
                            <?php the_sub_field('desc'); ?>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="img-section">
                    <?php if( have_rows('image_repeater') ): ?>
                      <div class="row">
                        <?php while ( have_rows('image_repeater') ) : the_row(); ?>
                          <div class="col-12">
                            <div class="img-block">
                              <img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['alt']; ?>" />
                            </div>
                          </div>
                        <?php endwhile; ?>
                      </div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <?php endwhile; ?>
      <?php endif; ?>


      <section class="fourths-section">
        <div class="container">
          <div class="row center">
            <div class="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12">
              <div class="row">
                <?php if( have_rows('four_numbers_repeater') ): ?>
                  <div class="numbers">
                    <?php while ( have_rows('four_numbers_repeater') ) : the_row(); ?>
                      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div class="number">
                          <div class="title">
                            <h2>
                              <?php the_sub_field('title'); ?>
                            </h2>
                          </div>
                          <div class="description">
                            <p>
                              <?php the_sub_field('desc'); ?>
                            </p>
                          </div>
                        </div>
                      </div>
                    <?php endwhile; ?>
                  </div>
                <?php endif; ?>
                <div class="feedback-p">
                  <div class="col-12">
                    <div class="feedback-block">
                      <div class="section-description">
                        <p>
                          <?php the_field('four_feedback_description'); ?>
                        </p>
                      </div>
                      <div class="content">
                        <div class="img-block">
                          <img src="<?php echo get_field('four_feedback_icon_face')['url']; ?>" alt="<?php echo get_field('four_feedback_icon_face')['alt']; ?>" />
                        </div>
                        <div class="title-and-info">
                          <div class="title">
                            <h3>
                              <?php the_field('four_feedback_name'); ?>
                            </h3>
                          </div>
                          <div class="desc">
                            <p>
                              <?php the_field('four_feedback_rank'); ?>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="fifths-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title-fif">
                <h2><?php the_field('five_title'); ?></h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <?php if( have_rows('five_project_block_repeater') ): ?>
                <div class="row g-my">
                  <?php while ( have_rows('five_project_block_repeater') ) : the_row(); ?>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div class="op-block">
                        <div class="content">
                          <div class="img-block">
                            <img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['alt']; ?>" />
                          </div>
                          <div class="info-block-p">
                            <div class="title">
                              <h2>
                                <?php the_sub_field('title'); ?>
                              </h2>
                            </div>
                            <div class="desc">
                              <p>
                                <?php the_sub_field('desc'); ?>
                              </p>
                            </div>
                          </div>
                          <?php if( have_rows('tags_repeater') ): ?>
                            <div class="tags-block-p">
                              <?php while ( have_rows('tags_repeater') ) : the_row(); ?>
                                <div class="tag">
                                  <p><?php the_sub_field('tag'); ?></p>
                                </div>
                              <?php endwhile; ?>
                            </div>
                          <?php endif; ?>
                        </div>
                      </div>
                    </div>
                  <?php endwhile; ?>
                </div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </section>

  </main>

<?php get_footer(); ?>