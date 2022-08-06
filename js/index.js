const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();



const swiper = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  // autoplay: {
  //   delay: 5000,
  // },
  speed: 300,
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: "bullets",
  //   clickable: true,
  // },
});

const element = document.querySelector('.gallery__select');
const choices = new Choices(element,{
  searchEnabled: false,
  placeholder: false,
  placeholderValue: null,
});



var gallery__swiper = new Swiper(".gallery__works-swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,

  pagination: {
    el: ".gallery__works-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__works-btn-next",
    prevEl: ".gallery__works-btn-prev"
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },

    1010: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      beforeResize: function () {
        this.slides.forEach((el) => {
          el.style.marginTop = "";
      });
      }
    }

  });

$('.gallery__works-slide').click(function(event) {
  $(this).modal({
    fadeDuration: 550,
    fadeDelay: 0.80
  });
  return false;
});


// $( "#accordion" ).accordion({
//     icons: false,
//     heightStyle: "content",
//     collapsible: true
// });

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('.catalog__item-link').forEach(function (tabsBtn) {
//     tabsBtn.addEventListener('click', function (e) {
//       const path = e.currentTarget.dataset.path;
//       document.querySelectorAll('.catalog__item-link').forEach(function (btn) {
//         btn.classList.remove('catalog__item-link--active')
//       });
//       e.currentTarget.classList.add('catalog__item-link--active');
//       document.querySelectorAll('.catalog__item-views').forEach(function (tabsBtn) {
//         tabsBtn.classList.remove('catalog__item-views--active')
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('catalog__item-views--active');
//     });
//   });
// })

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__accordion-painter-link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.catalog__accordion-painter-link').forEach(function (btn) {
        btn.classList.remove('tab-active')
      });
      e.currentTarget.classList.add('tab-active');
      document.querySelectorAll('.catalog__accordion-painter-link').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tab-active')
      });
      document.querySelector(`[data-path="${path}"]`).classList.add('tab-active');
    });
  });
})

//свайпер карточек в секции событии
const eventswiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
  spaceBetween: 25,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
  },

  pagination: {
    el: '.events__swiper-pagination',
    clickable: true,
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },

  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    962: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },
});
