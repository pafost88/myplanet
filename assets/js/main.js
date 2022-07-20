jQuery(document).ready(function ($) {

  $(document).ready(function () {

    function parallax_height() {
      var scroll_top = $(this).scrollTop();
      var sample_section_top = $(".sample-section").offset().top;
      var header_height = $(".sample-header-section").outerHeight();
      $(".sample-section").css({ "margin-top": header_height });
      $(".sample-header").css({ height: header_height - scroll_top });
    }
    parallax_height();
    $(window).scroll(function () {
      parallax_height();
    });
    $(window).resize(function () {
      parallax_height();
    });

  });

  $(document).ready(function () {

    $('.simple-slider').not('.slick-initialized').slick({
      dots: false,
      infinite: true,
      loop: true,
      speed: 3000,
      waitForTransition: true,
      pauseOnHover: false,
      focusOnSelect: true,
      autoplaySpeed: 5000,
      centerMode: true,
      arrows: false,
      slidesToShow: 5.1,
      autoplay: true,
      slidesToScroll: 1,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3.13,
            slidesToScroll: 1,
            centerPadding: '10px',
            centerMode: true,
            infinite: true,
          },
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.17,
            slidesToScroll: 1,
            centerPadding: '0px',
            centerMode: true,
            infinite: true
          },
          breakpoint: 1200,
          settings: {
            slidesToShow: 3.13,
            slidesToScroll: 1,
            centerPadding: '20px',
            centerMode: true,
            infinite: true
          }
        }
      ]
    });

    $('.feedback-sliderjs').not('.slick-initialized').slick({
      dots: false,
      infinite: true,
      speed: 1500,
      arrows: true,
      slidesToShow: 2,
      autoplay: false,
      slidesToScroll: 1,
      nextArrow: $('#next'),
      prevArrow: $('#prev'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });



  });
  
});