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

  // я чисто случайно нашёл как сделать это меню поиска, чтобы работало как надо, просто подставил свои классы, с тем, что ты мне кидал, у меня не получилось сделать, если тебе не сложно объясни плиз, что я здесь прописал и что за что отвечает, потому что я сам вообще хз, кроме строки classList.toggle, как я понимаю, это то же самое, что и toggleClass только написано на чистом js


  let btn = document.querySelector('.users__form-button');
  let users = document.querySelector('.users__form');

  const toggleMenu = () => {
    users.classList.toggle('search-active');
  }

  btn.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let its_users = target == users || users.contains(target);
    let its_btn = target == btn;
    let users_is_active = users.classList.contains('search-active');

    if (!its_users && !its_btn && users_is_active) {
      toggleMenu();
    }
  })
});