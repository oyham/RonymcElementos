const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 20 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER PRODUCTS */
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 38,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        /*640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },*/
        1024: {
          /*slidesPerView: 5,*/
          spaceBetween: 72,
        },
    },
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  })
  
  sr.reveal('.header__img, .home__container, .home__images',{interval: 200})
  sr.reveal('.logos__img',{interval: 100, origin: 'top', viewOffset:{ top: 300}})
  sr.reveal('.footer__container',{delay: 550})
  sr.reveal('.footer__info, .footer__bg', {origin: 'bottom'})
  // sr.reveal('.products__container',{origin: 'right'})