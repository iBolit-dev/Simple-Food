$(function () {
  var mixer = mixitup('.popular__content');

  var mySwiper = new Swiper('.swiper', {
    speed: 2000,
    spaceBetween: 100,
    autoplay: true,
    grabCursor: true,
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }

  });
})