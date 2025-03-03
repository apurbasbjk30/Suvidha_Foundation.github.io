

  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


//   images slider 


let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();




// about_right 
// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}

// testimonial 
// $(document).ready(function() {
 
//   $("#owl-example").owlCarousel({
//       itemsDesktop : [1499,4],
//       itemsDesktopSmall : [1199,3],
//       itemsTablet : [899,2],
//       itemsMobile : [599,1],
//       navigation : true,
//       navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
//   });
  
// });
// $(document).ready(function(){
//   $('.customer-logos').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1500,
//       arrows: false,
//       dots: false,
//       pauseOnHover: false,
//       responsive: [{
//           breakpoint: 768,
//           settings: {
//               slidesToShow: 4
//           }
//       }, {
//           breakpoint: 520,
//           settings: {
//               slidesToShow: 3
//           }
//       }]
//   });
// });

$(document).ready(function(){
  // Initialize the Owl Carousel
  $(".testimonial-slider").owlCarousel({
      items: 1,               // Display 1 testimonial at a time
      loop: true,             // Enable looping
      margin: 30,             // Margin between testimonials
      autoplay: true,         // Enable autoplay
      autoplayTimeout: 5000,  // Autoplay timeout (5000ms = 5 seconds)
      dots: true,             // Show dots for pagination
      nav: false,             // Disable navigation arrows
      autoplayHoverPause: true, // Pause autoplay on hover
  });
});



