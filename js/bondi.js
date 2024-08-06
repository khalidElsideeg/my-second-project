$(function () {
  "use strict";

  // Trigger nice scroll

  // $('html').niceScroll({

  //     cursorcolor: '#33d1cc',
  //     cursorwidth: '10',
  //     cursorborderradios: '0',
  //     cursorborder: '1px solid #33d1cc'

  // });

  // add class active to navbar link

  $(".navbar-nav li a").click(function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // Fixed menu

  $("#setting").on("click", function () {
    $(this).parent(".fixed-menu").toggleClass("is-visible");

    if ($(this).parent(".fixed-menu").hasClass("is-visible")) {
      $(this).parent(".fixed-menu").animate(
        {
          left: "0",
        },
        400
      );
    } else {
      $(this).parent(".fixed-menu").animate(
        {
          left: "-245px",
        },
        400
      );
    }
  });

  // scroll smothly to section

  // $('.navbar-nav li a').click(function (e) {

  //     e.preventDefault();

  //     $('html, body').animate({

  //         scrollTop: $('#' + ($(this).data('scroll'))).offset().top

  //     }, 500);
  // });

  $(window).scroll(function () {
    // Sync navbar links with section

    $(".section").each(function () {
      if ($(window).scrollTop() > $(this).offset().top) {
        var sectionId = $(this).attr("id");

        $(".navbar-nav li a").removeClass("active");

        $('.navbar-nav li a[data-scroll = "' + sectionId + '"]').addClass(
          "active"
        );
      }
    });

    // Scroll to top button

    var scrollToTop = $(".scroll-to-top");

    if ($(window).scrollTop() >= 2000) {
      scrollToTop.fadeIn(400);
    } else {
      scrollToTop.fadeOut(400);
    }
  });

  // Click buttun to scroll to top

  $(".scroll-to-top").click(function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  // shuffel photo with active

  $(".our-work ul li").on("click", function () {
    var classToShow = $(this).data("show");

    $(this)
      .addClass("active btn main-btn rounded-pill")
      .siblings()
      .removeClass("active btn main-btn rounded-pill");

    $(".our-work .row .box").hide(300);

    $(".our-work .row .box." + classToShow).show(300);
  });

  // Change Thieme color

  $(".change-colors li").on("click", function () {
    $("body").attr("data-defualt-color", $(this).data("color"));
  });
});
