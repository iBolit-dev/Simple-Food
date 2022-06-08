$(function () {


  $('.menu__active-logo, .close-btn, .menu__link, .footer__contacts-link, .footer__social-link').on('click', function () {
    $('#home').removeClass('lock'),
      $('.menu').removeClass('menu__active')
  });

  $('.users__button-back').on('click', function () {
    $('.users__form').removeClass('search-active')
  });



  let btn = document.querySelector('.menu__burger-button');
  let users = document.querySelector('.menu');
  let body = document.querySelector('#home');

  const toggleMenu = () => {
    users.classList.toggle('menu__active');
    body.classList.toggle('lock');
  }

  btn.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let its_users = target == users || users.contains(target);
    let its_btn = target == btn;
    let users_is_active = users.classList.contains('menu__active');

    if (!its_users && !its_btn && users_is_active) {
      toggleMenu();
    }
  })


  $('.logo, .menu__link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  var mixer = mixitup('.popular__content');



  var mySwiper = new Swiper('.swiper', {
    speed: 2000,
    spaceBetween: 100,
    autoplay: true,
    grabCursor: true,
    autoHeight: true,
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification',
    },

    breakpoints: {
      767: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }
    },

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  });
});


$(function () {

  var mySwiper = new Swiper('.swiper-swipe', {
    pagination: {
      el: '.swiper-swipe__card',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 1,
        },
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      }
    },
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