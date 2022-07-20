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
        <div class="litle-menu">
          <!-- <label for="nav-toggle" class="">
            <h1 class="" aria-label="toggle navigation menu">Menu</h1>
          </label> -->
            <ul>
              <?php if( have_rows('menu_repeater', 'option') ): ?>
                <?php while ( have_rows('menu_repeater', 'option') ) : the_row(); ?>
                  <li class="lipunkt">
                    <a href="<?php echo get_sub_field('link', 'option')['url']; ?>" class="" target="<?php echo get_sub_field('link', 'option')['target']; ?>">             
                      <?php echo get_sub_field('link', 'option')['title']; ?>
                    </a>
                  </li>
                <?php endwhile; ?>
              <?php endif; ?>
              <li>
                <a href="">
                  <label for="nav-toggle" class="">
                    <span class="" aria-label="toggle navigation menu"><?php echo get_field('menu_link', 'option'); ?></span>
                  </label>
                </a>
              </li>
            </ul>
        </div>
        <div class="navigation">
          <input type="checkbox" class="navigation__checkbox" id="nav-toggle" />
          <label for="nav-toggle" class="navigation__button">
            <span class="navigation__icon" aria-label="toggle navigation menu"></span>
          </label>
          <!-- /// -->
            <div class="navigation__background"></div>
          <!-- /// -->
          <div class="navigation__nav" role="navigation">
            <div class="logo-menu">
              <a href="<?php echo get_field('logo_menu_link', 'option')['url']; ?>" target="<?php echo get_field('logo_menu_link', 'option')['target']; ?>">             
                <img src="<?php echo get_field('logo_menu', 'option')['url']; ?>" />
              </a>
            </div>
            <?php if( have_rows('burger_menu', 'option') ): ?>
              <ul class="navigation__list">
                <?php while ( have_rows('burger_menu', 'option') ) : the_row(); ?>
                  <li class="navigation__item">
                    <!-- <a href="#" class="navigation__link">Cases</a> -->
                    <a href="<?php echo get_sub_field('link', 'option')['url']; ?>" class="navigation__link" target="<?php echo get_sub_field('link', 'option')['target']; ?>">             
                      <?php echo get_sub_field('link', 'option')['title']; ?>
                    </a>
                  </li>
                <?php endwhile; ?>
              </ul>
            <?php endif; ?>
            <div class="bottom-menu">
              <div class="menu-section">
                <div class="social-block">
                  <a href="<?php echo get_field('instagram_link', 'option')['url']; ?>" target="<?php echo get_field('instagram_link', 'option')['target']; ?>">             
                    <?php echo get_field('instagram_link', 'option')['title']; ?>
                  </a>
                </div>
                <div class="social-block mp">
                  <a href="<?php echo get_field('linkedin_link', 'option')['url']; ?>" target="<?php echo get_field('linkedin_link', 'option')['target']; ?>">             
                    <?php echo get_field('linkedin_link', 'option')['title']; ?>
                  </a>
                </div>
              </div>
              <div class="menu-section">
                <div class="social-block">
                  <a href="<?php echo get_field('dribbble_link', 'option')['url']; ?>" target="<?php echo get_field('dribbble_link', 'option')['target']; ?>">             
                    <?php echo get_field('dribbble_link', 'option')['title']; ?>
                  </a>
                </div>
                <div class="social-block mp">
                  <a class="last" href="<?php echo get_field('behance_link', 'option')['url']; ?>" target="<?php echo get_field('behance_link', 'option')['target']; ?>">             
                    <?php echo get_field('behance_link', 'option')['title']; ?>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </header>
    
<main>