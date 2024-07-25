$('#banner__slick').slick({ 
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    prevArrow:".prev",
    nextArrow:".next",
    autoplay:true,
    speed: 2000,

  });

  
  $('.testmonial_active_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testi-testmonial_image'
  });
  $('.testi-testmonial_image').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testmonial_active_part',
    centerPadding: "0px",
    centerMargin : "0px",
    prevArrow:".top_test",
    nextArrow:".btm_test",
    vertical:true,
    verticalSwiping:true,
    centerMode: true,
    focusOnSelect: true
  });

  $('.slick__services__part').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    centerMode:true,
    centerPadding:"0px",
    prevArrow:".top_ser",
    nextArrow:".bottom_ser",
    autoplay:true,
    speed: 2000,
  });


  jQuery(document).ready(function($) {
    $('.counter__tag').counterUp({
        delay: 10,
        time: 1000
    });
});
  