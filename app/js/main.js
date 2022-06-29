$(function () {

  $('.description__link').on('click', function (e) {
    e.preventDefault();
    $('.description__link').removeClass('description__link--active');
    $(this).addClass('description__link--active');


    $('.description__item ').removeClass('description__item--active');
    $($(this).attr('href')).addClass('description__item--active');

  });


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

  $('.select-style, .product__num').styler();

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


$(function () {

  const swiper = new Swiper('.recommendations__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    }
  });


  $('.star').rateYo({
    starWidth: '16px',
    spacing: "6px",
    readOnly: true,
    normalFill: "#c1c1c14d",
    ratedFill: "#FFB800",
    starSvg: "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
      "<g clip-path='url(#clip0_3197_367)'>" +
      "<path d='M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z'/>" +
      "</g>" +
      "<defs>" +
      "<clipPath id='clip0_3197_367'>" +
      "<rect width='16' height='16'  transform='matrix(-1 0 0 1 16 0)'/>" +
      "</clipPath>" +
      "</defs>" +
      "</svg>",
  });


  var mySwiper = new Swiper('.gallery__slider', {


    breakpoints: {
      568: {
        navigation: {
          prevEl: '.gallery__btn-prev',
          nextEl: '.gallery__btn-next',
        }
      }
    }

  });


  const ratings = document.querySelectorAll('.rating');

  if (ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains('rating--set')) {
        setRating(rating);
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item');
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener("mouseenter", function (e) {
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleave", function (e) {
          setRatingActiveWidth();
        });
        ratingItem.addEventListener("click", function (e) {
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value, rating);
          } else {
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          }
        })

      }
    }
  }
})