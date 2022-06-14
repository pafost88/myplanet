<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.png"
        type="image/png">
  <title><?php wp_title(); ?></title>
  <?php wp_head(); ?>
</head>
<body>

<header>
        <div class="row align-items-center justify-content-between">
          <div class="col-2 col-xl-2">
            <div class="logo">
              <a href="<?php echo get_field('logo_link', 'option')['url']; ?>" target="<?php echo get_field('logo_link', 'option')['target']; ?>">             
                <img src="<?php echo get_field('logo', 'option')['url']; ?>" />
              </a>
            </div>
          </div>
          <div class="col-10 col-xxl-10 ">
            <?php if( have_rows('menu_repeater', 'option') ): ?>
              <ul class="nav">
                <?php while ( have_rows('menu_repeater', 'option') ) : the_row(); ?>
                  <li class="nav-item">
                    <a href="<?php echo get_sub_field('link', 'option')['url']; ?>" class="nav-link" target="<?php echo get_sub_field('link', 'option')['target']; ?>">             
                      <?php echo get_sub_field('link', 'option')['title']; ?>
                    </a>
                  </li>
                <?php endwhile; ?>
                <li class="nav-item fixed">
                  <div class="burgermenu-toggler">
                    <div class="icon-block">
                      <div class="icon menu"></div>
                    </div>
                  </div>
                </li>
              </ul>
            <?php endif; ?>
          </div>
          <!-- <div class="col-auto mob">
            <div class="burgermenu-toggler">
              <div class="icon menu"></div>
            </div>
          </div> -->
        </div>
      </header>
      <div class="burgermenu">
        <div class="row">
          <div class="col-12">
            <div class="row justify-content-end">
              <div class="menu-top">
                <div class="col-6">
                  <div class="menu-logo">
                    <a href="<?php echo get_field('logo_menu_link', 'option')['url']; ?>" target="<?php echo get_field('logo_menu_link', 'option')['target']; ?>">             
                      <img src="<?php echo get_field('logo_menu', 'option')['url']; ?>" />
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div class="burgermenu-close-block">
                    <div class="burgermenu-close">
                      <div class="icon close"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <?php if( have_rows('burger_menu', 'option') ): ?>
              <div class="col-12">
                <?php while ( have_rows('burger_menu', 'option') ) : the_row(); ?>
                  <div class="menu-block">
                    <div class="menu-link">
                      <a href="<?php echo get_sub_field('link', 'option')['url']; ?>" class="nav-link" target="<?php echo get_sub_field('link', 'option')['target']; ?>">             
                        <?php echo get_sub_field('link', 'option')['title']; ?>
                      </a>
                    </div>
                  </div>
                <?php endwhile; ?>
              </div>
            <?php endif; ?>
            <div class="col-12">
              <div class="menu-bottom">
                <?php if( have_rows('burger_social', 'option') ): ?>
                  <div class="content">
                    <?php while ( have_rows('burger_social', 'option') ) : the_row(); ?>
                        <div class="link-block">
                          <a href="<?php echo get_sub_field('link', 'option')['url']; ?>" target="<?php echo get_sub_field('link', 'option')['target']; ?>">             
                            <?php echo get_sub_field('link', 'option')['title']; ?>
                          </a>
                        </div>
                    <?php endwhile; ?>
                  </div>
                <?php endif; ?>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="menu-bottom-mobile">
                  <div class="content">
                    <div class="col-6">
                      <div class="link-block">
                        <a href="<?php echo get_field('linkedin_link', 'option')['url']; ?>" target="<?php echo get_field('linkedin_link', 'option')['target']; ?>">             
                          <?php echo get_field('linkedin_link', 'option')['title']; ?>
                        </a>
                      </div>
                      <div class="link-block">
                        <a href="<?php echo get_field('dribbble_link', 'option')['url']; ?>" target="<?php echo get_field('dribbble_link', 'option')['target']; ?>">             
                          <?php echo get_field('dribbble_link', 'option')['title']; ?>
                        </a>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="link-block">
                        <a href="<?php echo get_field('instagram_link', 'option')['url']; ?>" target="<?php echo get_field('instagram_link', 'option')['target']; ?>">             
                          <?php echo get_field('instagram_link', 'option')['title']; ?>
                        </a>
                      </div>
                      <div class="link-block">
                        <a href="<?php echo get_field('behance_link', 'option')['url']; ?>" target="<?php echo get_field('behance_link', 'option')['target']; ?>">             
                          <?php echo get_field('behance_link', 'option')['title']; ?>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="burgermenu-overlay"></div> -->
    
<main>