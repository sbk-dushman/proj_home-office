import Swiper from './swiper-bundle.esm.browser.min.js'
  
	const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
	autoplay:true,
  	loop: true,
  	spaceBetween: 20,

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
  navigation: {
    nextEl: '.slide-button-next',
    prevEl: '.slide-button-prev',
  },

});