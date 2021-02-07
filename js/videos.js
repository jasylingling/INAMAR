// * === VIDEOS SECTION === *

// SLIDESHOW VIDEOS

$(document).ready(function () {
  // button variables
  const nextButton = $("a.next");
  const prevButton = $("a.prev");
  const checkbox = $("#toggle_autoplay");

  // slideshow variables
  let slider = $("#slideshow");
  let sliderUl = slider.children("ul");
  let slides = sliderUl.children("li");
  let slideCount = slides.length;
  let slideWidth = slides.width();
  let slideHeight = slides.height();
  let sliderUlWidth = slideCount * slideWidth; // total width of the whole slideshow container
  let sliderInterval;

  // adjust the slider (as big as the slide)
  slider.css({
    width: slideWidth,
    height: slideHeight,
  });

  // fit the row of sliders
  sliderUl.css({
    width: sliderUlWidth,
    marginLeft: -slideWidth,
  });

  // take the last slide and prepend it to the row of slides
  slides.last().prependTo(sliderUl);

  // click-events
  prevButton.on("click", moveLeft);
  nextButton.on("click", moveRight);
  checkbox.on("click", autoplayToggle);

  // functions
  // function for left arrow
  function moveLeft(e) {
    // prevent default
    if (e) {
      e.preventDefault();
    }

    // animate the movement of the slide
    sliderUl.animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        // take the last li in the ul and prepend to the ul
        $(this).children("li").last().prependTo(sliderUl);
        // reset the left value of the slide which we change in the animation
        $(this).css("left", "");
      }
    );
  }

  // function for the right arrow
  function moveRight(e) {
    // prevent default
    if (e) {
      e.preventDefault();
    }

    sliderUl.animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        // take the first li in the ul and append to the ul
        $(this).children("li").first().appendTo(sliderUl);
        // reset the left value of the slide which we change in the animation
        $(this).css("left", "");
      }
    );
  }

  // autoplay toggle
  function autoplayToggle(e) {
    // console.log(e.currentTarget);
    const checked = $(e.currentTarget);
    if (checked.is(":checked")) {
      sliderInterval = setInterval(moveRight, 3000);
    } else {
      clearInterval(sliderInterval);
    }
  }
});

// ACCORDION LYRICS

$(document).ready(function () {
  $(document).on("click", ".accordion", function () {
    if ($(this).next().is(":hidden")) {
      // hide every class ".panel"
      $(".panel").hide();
      $(".accordion span").html('<i class="fas fa-plus"></i>');
      // if fontawesome sign is "+", switch to "-"
      if ($(this).find("span").html() === '<i class="fas fa-plus"></i>') {
        $(this).find("span").html('<i class="fas fa-minus"></i>');
        console.log("accordion is open");
      }
      // else stay/switch back to "+"
    } else {
      $(".accordion span").html('<i class="fas fa-plus"></i>');
      console.log("accordion is closed");
    }
    $(this).next().slideToggle("slow");
  });
});
