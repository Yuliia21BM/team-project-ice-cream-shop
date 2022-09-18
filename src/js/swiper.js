const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 100,
  loop: true,
   autoplay: {
   delay: 7000,
 },

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});