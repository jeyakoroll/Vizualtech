$(document).ready(function() {
  var gallery = $('.slider__item');
  
  // gallery
  gallery.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    navContainer: '.slider__navs',
    autoplayTimeout: 10000,
    responsiveClass:true,
    center: true,
    autoWidth: true,
    loop:true,
    items: 1,
    nav: false,
    dots: true,
    responsive:{
        0:{
      // margin: 150
        },
        992:{
      margin: 0
        }
    }
  });

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
  });

  $('.dropdown-menu_item').hover(function() {
    var me = $(this),
        pic = me.closest('.dropdown-menu').find('.dropdown__pic');

    if (me.hasClass('dropdown-menu_item-one')) {
      pic.css('background', "url('public/img/menu-one.png') no-repeat center center/cover")
    } else if (me.hasClass('dropdown-menu_item-two')) {
      pic.css('background', "url('public/img/menu-two.jpg') no-repeat center center/cover")
    } else if (me.hasClass('dropdown-menu_item-three')) {
      pic.css('background', "url('public/img/menu-three.png') no-repeat center center/cover")
    } else if (me.hasClass('dropdown-menu_item-four')) {
      pic.css('background', "url('public/img/menu-four.jpg') no-repeat center center/cover")
    } 
   
  });


})

