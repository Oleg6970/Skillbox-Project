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



const heroSwiper = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  autoplay: {
    delay: 10000,
  },
  speed: 300,
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: "bullets",
  //   clickable: true,
  // },
});
heroSwiper.update()

const element = document.querySelector('.gallery__select');
const choices = new Choices(element,{
  searchEnabled: false,
  placeholder: false,
  placeholderValue: null,
});



var gallerySwiper = new Swiper(".gallery__works-swiper", {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
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
    768: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },

    1024: {
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

gallerySwiper.update()

$('.gallery__works-slide').click(function(event) {
  $(this).modal({
    fadeDuration: 550,
    fadeDelay: 0.80
  });
  return false;
});


(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


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


const eventSwiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
  spaceBetween: 25,
  slidesPerGroup: 1,
  observer: true,
  observeParents: true,
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
eventSwiper.update()

const projectSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  observer: true,
  observeParents: true,
  loop: true,

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },

    1000: {
      slidesPerView: 2,
      spaceBetween: 47,
      slidesPerGroup: 2,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
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
    }
  }
});
projectSwiper.update()

tippy('#tooltip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  maxWidth: 256,
});

tippy('#tooltip-2', {
  content: 'В стремлении повысить качество',
  maxWidth: 256,
});

tippy('#tooltip-3', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 256,
});


var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

const validation = new JustValidate("#form", {
  errorFieldCssClass: "is-invalid",
  errorLabelCssClass: "is-label-invalid",
  errorLabelStyle: {
    color: "#D11616",
    textDecoration: "underlined",
    fontSize: "12px",
  },
});


validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимальная длина имени - 2",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Максимальная длина имени - 30",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
      errorMessage: "Номер телефона некорректен",
    },
  ])
  .onSuccess((event) => {
    const message = document.querySelector('.contacts__message')

    message.classList.add('visible-message')
    setTimeout(function() {
      message.classList.remove('visible-message');
    }, 5000);
    event.target.reset();
  });


document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});


(() => {
  const MOBILE_WIDTH = 580;

  function getWindowWidth () {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function scrollToContent (link, isMobile) {
    if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      scrollToContent(this, true);
    });
  });
})();

ymaps.ready(init);
var contactMap;

function init(){
  contactMap = new ymaps.Map ("map", {
      center: [55.758468, 37.601088],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );
  contactMap.behaviors.disable('scrollZoom');
  var myPlacemark = new ymaps.Placemark([55.757068, 37.600088], {}, {
    iconLayout:'default#image',
    iconImageHref: 'img/marker.svg',
    iconImageSize: [25,25],
    iconImageOffset: [-3,-42],
  });

  contactMap.geoObjects.add(myPlacemark);
}
