// * === NAVIGATION === *

// ANCHOR NAVIGATION

$(document).ready(function () {
  let scrollLink = $(".scroll");

  // smooth scrolling
  scrollLink.on("click", function (e) {
    e.preventDefault();
    // how far away from the top of the page is this hash(tag)-section and go there when clicked
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });

  // for highlighting active nav-link
  $(window).scroll(function () {
    // where is the location of my scrollbar
    let scrollbarLocation = $(this).scrollTop() + 100; // added + 100px so the active-link will appear "in time"
    // console.log(scrollbarLocation);

    scrollLink.each(function () {
      // calculate how far away each section is from the top of the page
      let sectionOffset = $(this.hash).offset().top;

      // if reached the specific section, set "active" and remove "ex"-active
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
});

// TOGGLE HAMBURGER / RESPONSIVE NAV

$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav-links").toggleClass("active");

    // if fontawesome sign is burger-sign, switch to "x"
    if ($(".menu-toggle i").hasClass("fa-bars")) {
      $(".menu-toggle i").removeClass("fa-bars");
      $(".menu-toggle i").addClass("fa-times");
      console.log("responsive nav is open");

      // else stay/switch back to burger-sign
    } else {
      $(".menu-toggle i").removeClass("fa-times");
      $(".menu-toggle i").addClass("fa-bars");
      console.log("responsive nav is hidden");
    }

    // if click on a nav-link, close the navbar
    $(".nav-links a").on("click", function () {
      $(".nav-links").removeClass("active");
      $(".menu-toggle i").removeClass("fa-times");
      $(".menu-toggle i").addClass("fa-bars");
    });
  });
});

// * === NAVIGATION END === *

// * === BACK TO TOP-BUTTON === *

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      // console.log("user scrolled minimum 500px down ");
      // show back-to-top button
      $("#back-to-top").fadeIn();
    } else {
      // hide back-to-top button
      $("#back-to-top").fadeOut();
    }
  });
  // if user click back-to-top button, scroll back to top
  $("#back-to-top").on("click", function () {
    console.log("user clicked on the back-to-top button");
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
});

// * === BACK TO TOP-BUTTON END === *
