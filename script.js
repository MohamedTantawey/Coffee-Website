const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toggle Mobile Menu Visibility
  document.body.classList.toggle("show-mobile-menu");
});

//Close Menu When The Close Button Is Clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close Menu When The Open Button Is Clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click()
  );
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabcursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
