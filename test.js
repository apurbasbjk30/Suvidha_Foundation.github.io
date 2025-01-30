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
