/*=============== New Swiper ===============*/
let swiperName = new Swiper(".new__swiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination:{
    el:".swiper-pagination",
   },
   breakpoints:{
    1150:{
      slidesPerView:3,
      spaceBetween:-56,
    },
   },
  });
  
  /*=============== SWIPER JS ===============*/
let swiperCards2 = new Swiper(".card__content2", {
    loop: true,
    spaceBetween:16,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
    /*=============== SWIPER JS ===============*/
let swiperCardse = new Swiper(".card__contente", {
  loop: true,
  spaceBetween:16,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
/*=============== ANIMATED DOTS JS ===============*/
const dots = document.querySelector('.loading__dots')

const addAnimate = () =>{
    /* Add animate class */
    dots.classList.add('animate')

    setTimeout(() =>{
        /* Remove animate class */
        dots.classList.remove('animate')

        setTimeout(() =>{
            /* Run the function again */
            addAnimate()
        }, 100)
    }, 2600)
}
addAnimate()
  /*=============== HOME SWIPER ===============*/
// let swiperProjects = new Swiper(".projects__container", {
//     loop: true,
//     spaceBetween: 24,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//    },
//    pagination:{
//     el:".swiper-pagination",
//    },
//    breakpoints:{
//     1200:{
//       slidesPerView:2,
//       spaceBetween:-56,
//     },
//    },
//   });
  // document.querySelector("#open-subscribe-from").addEventListener("click", function () {
  //   document.querySelector(".subscribe-form").classList.add("active");
  // });
  
  // document.querySelector(".subscribe-form .close-btn").addEventListener("click", function () {
  //   document.querySelector(".subscribe-form").classList.remove("active");
  // });
  
