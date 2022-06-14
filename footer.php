</main>
    <footer>
      <div class="container">
        <div class="row">

          <div class="col-12">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div class="fotter-main-content">
                  <div class="content">
                    <div class="fotter-main-title">
                      <h1>
                        <?php echo get_field('have_an_idea', 'option'); ?>
                      </h1>
                    </div>
                    <div class="fotter-main-description">
                      <h2>
                        <a href="<?php echo get_field('tell_us_about_it_link', 'option')['url']; ?>" target="<?php echo get_field('tell_us_about_it_link', 'option')['target']; ?>">             
                          <?php echo get_field('tell_us_about_it_link', 'option')['title']; ?>
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-0 col-md-0 col-sm-0">
                <div class="footer-main-logo">
                  <a href="<?php echo get_field('logo_footer_link', 'option')['url']; ?>" target="<?php echo get_field('logo_footer_link', 'option')['target']; ?>">             
                    <img src="<?php echo get_field('logo_footer', 'option')['url']; ?>" class="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                <div class="footer-section">
                  <div class="mail-block">
                    <a href="<?php echo get_field('email', 'option')['url']; ?>" target="<?php echo get_field('email', 'option')['target']; ?>">             
                      <?php echo get_field('email', 'option')['title']; ?>
                    </a>
                  </div>
                  <div class="adress-block">
                    <p><?php echo get_field('address_first', 'option'); ?></p>
                  </div>
                  <div class="adress-block">
                    <p><?php echo get_field('address_second', 'option'); ?></p>
                  </div>
                  <div class="privacy-block">
                    <a href="<?php echo get_field('privacy_policy', 'option')['url']; ?>" target="<?php echo get_field('privacy_policy', 'option')['target']; ?>">             
                      <?php echo get_field('privacy_policy', 'option')['title']; ?>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-0 col-md-0 col-sm-0">
                <div class="footer-nav">
                  <div class="title"><?php echo get_field('title_home', 'option'); ?></div>
                  <div class="nav">
                    <?php if( have_rows('repeater_home', 'option') ): ?>
                      <ul>
                        <?php while ( have_rows('repeater_home', 'option') ) : the_row(); ?>
                          <a href="<?php echo get_sub_field('link', 'option')['url']; ?>" target="<?php echo get_sub_field('link', 'option')['target']; ?>">
                            <li><?php echo get_sub_field('link', 'option')['title']; ?></li>
                          </a>
                        <?php endwhile; ?>
                      </ul>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-0 col-md-0 col-sm-0">
                <div class="footer-nav">
                  <div class="title"><?php echo get_field('title_experts_in', 'option'); ?></div>
                  <div class="nav">
                    <?php if( have_rows('repeater_experts_in', 'option') ): ?>
                      <ul>
                        <?php while ( have_rows('repeater_experts_in', 'option') ) : the_row(); ?>
                          <a href="<?php echo get_sub_field('link', 'option')['url']; ?>" target="<?php echo get_sub_field('link', 'option')['target']; ?>">
                            <li><?php echo get_sub_field('link', 'option')['title']; ?></li>
                          </a>
                        <?php endwhile; ?>
                      </ul>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <div class="footer-social">
                  <div class="content">
                    <div class="title"><?php echo get_field('title_follow_us', 'option'); ?></div>
                    <div class="socials">
                      <a href="<?php echo get_field('follow_us_facebook_link', 'option')['url']; ?>" target="<?php echo get_field('follow_us_facebook_link', 'option')['target']; ?>">
                        <div class="icon facebook"></div>
                        <?php echo get_field('follow_us_facebook_link', 'option')['title']; ?>
                      </a>
                      <a href="<?php echo get_field('follow_us_instagram_link', 'option')['url']; ?>" target="<?php echo get_field('follow_us_instagram_link', 'option')['target']; ?>">
                        <div class="icon instagram"></div>
                        <?php echo get_field('follow_us_instagram_link', 'option')['title']; ?>
                      </a>
                      <a href="<?php echo get_field('follow_us_dribbble_link', 'option')['url']; ?>" target="<?php echo get_field('follow_us_dribbble_link', 'option')['target']; ?>">
                        <div class="icon dribbble"></div>
                        <?php echo get_field('follow_us_dribbble_link', 'option')['title']; ?>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-0 col-xl-0 col-lg-12 col-md-12 col-sm-12">
                <div class="footer-logo-mobile">
                  <a href="<?php echo get_field('logo_footer_link_mobile', 'option')['url']; ?>" target="<?php echo get_field('logo_footer_link_mobile', 'option')['target']; ?>">             
                    <img src="<?php echo get_field('logo_footer_mobile', 'option')['url']; ?>" class="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
</body>
</html>
<?php wp_footer(); ?>