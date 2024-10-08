$(document).ready(function () {
    // Slick slider for the main section
    $(".slider").slick({
      slidesToShow: 3, // Show 3 cards at a time
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Auto-slide every 2 seconds
      dots: true, // Add navigation dots at the bottom
      arrows: false, // Hide next/prev arrows
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2, // Show 2 cards on medium screens
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1, // Show 1 card on small screens
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // Slick slider for client carousel
    $(".client-carousel").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      dots: true,
    });
  });
  
  // Swiper for logo runner
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6, // Number of logos visible at once
    spaceBetween: 10, // Space between logos
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Delay between transitions (in milliseconds)
      disableOnInteraction: false,
    }
  });

  // script for modal working.........
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get the modal and trigger elements
    var modal = document.getElementById("loginModal");
    var openModal = document.getElementById("openLoginModal");
    var closeModal = document.getElementsByClassName("close")[0];
  
    // Show the modal when the Register / Login link is clicked
    openModal.onclick = function(event) {
      event.preventDefault();
      modal.style.display = "flex";
    }
  
    // Hide the modal when the close button is clicked
    closeModal.onclick = function() {
      modal.style.display = "none";
    }
  
    // Hide the modal when clicking outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  