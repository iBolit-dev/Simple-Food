$(function () {

  $('.filter__price-input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
  });

  $('.select-style').styler();

  let button = document.querySelector('.users__form-button');
  let user = document.querySelector('.users__form');

  const toggleSearch = () => {
    user.classList.toggle('search-active');
  }

  button.addEventListener('click', e => {
    e.stopPropagation();

    toggleSearch();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let its_users = target == user || user.contains(target);
    let its_button = target == button;
    let users_is_active = user.classList.contains('search-active');

    if (!its_users && !its_button && users_is_active) {
      toggleSearch();
    }
  })


  $('.menu__active-logo, .close-btn, .menu__link, .footer__contacts-link, .footer__social-link').on('click', function () {
    $('#home').removeClass('lock'),
      $('.menu').removeClass('menu__active'),
      $('.filter').removeClass('filter__active')
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
      630: {
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

  var mySwiper = new Swiper('.discount__swiper', {
    pagination: {
      el: '.swiper-pagination__catalog',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      630: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });



  let settings = document.querySelector('.catalog__setting');
  let filter = document.querySelector('.filter');
  let home = document.querySelector('#home');

  const toggleFilter = () => {
    filter.classList.toggle('filter__active');
    home.classList.toggle('lock');
  }

  settings.addEventListener('click', e => {
    e.stopPropagation();

    toggleFilter();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let its_filter = target == filter || filter.contains(target);
    let its_settings = target == settings;
    let filter_is_active = filter.classList.contains('filter__active');

    if (!its_filter && !its_settings && filter_is_active) {
      toggleFilter();
    }
  });


});