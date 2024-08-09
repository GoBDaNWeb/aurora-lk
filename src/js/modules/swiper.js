import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Controller,
  FreeMode,
  Mousewheel,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";

export const swiper = () => {
  const eventsSwiper = new Swiper(".events-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    navigation: {
      prevEl: ".events-prev",
      nextEl: ".events-next",
    },
    spaceBetween: 155,
    pagination: {
      //@ts-ignore
      el: ".events-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        loop: false,
        centeredSlides: false,
        spaceBetween: 25,
      },
      767: {
        slidesPerView: 1.7,
        loop: false,
        centeredSlides: false,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 2.1,
        spaceBetween: 155,
        loop: true,
        centeredSlides: true,
      },
      1445: {
        slidesPerView: 2.5,
        spaceBetween: 155,
        loop: true,
      },
    },
    centeredSlides: true,
  });
  const eventCardSwiper = new Swiper(".event-swiper", {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    navigation: {
      prevEl: ".event-prev",
      nextEl: ".event-next",
    },
    effect: "fade",
    spaceBetween: 10,
    pagination: {
      //@ts-ignore
      el: ".event-pagination",
    },
    breakpoints: {
      0: {
        allowTouchMove: false,
      },
      1024: {
        allowTouchMove: true,
      },
    },
  });
  const servicesSwiper = new Swiper(".services-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      //@ts-ignore
      el: ".services-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
    },
  });
  const boatsSwiper = new Swiper(".boats-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      prevEl: ".boats-prev",
      nextEl: ".boats-next",
    },
    pagination: {
      //@ts-ignore
      el: ".boats-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2.3,
        spaceBetween: 20,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2.3,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  const boatSwiper = new Swiper(".boat-swiper", {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      prevEl: ".boat-prev",
      nextEl: ".boat-next",
    },
    pagination: {
      //@ts-ignore
      el: ".boat-pagination",
    },
    breakpoints: {
      0: {
        allowTouchMove: false,
      },
      1024: {
        allowTouchMove: true,
      },
    },
  });

  const fleetInnerSwiper = new Swiper(".fleet-inner-swiper", {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      prevEl: ".fleet-inner-swiper-prev",
      nextEl: ".fleet-inner-swiper-next",
    },
    pagination: {
      //@ts-ignore
      el: ".fleet-inner-pagination",
    },
    breakpoints: {
      0: {
        allowTouchMove: false,
      },
      1024: {
        allowTouchMove: true,
      },
    },
  });
  const homeRoutesSwiper = new Swiper(".home-routes-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    navigation: {
      prevEl: ".home-routes-prev",
      nextEl: ".home-routes-next",
    },
    pagination: {
      //@ts-ignore
      el: ".home-routes-pagination",
      type: "fraction",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 25,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  const fleetInnerRoutesSwiper = new Swiper(".fleet-inner-routes-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    // navigation: {
    //   prevEl: ".home-routes-prev",
    //   nextEl: ".home-routes-next",
    // },
    pagination: {
      //@ts-ignore
      el: ".fleet-inner-routes-pagination",
      type: "fraction",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 25,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  const gallerySwiper = new Swiper(".gallery-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1.4,
    spaceBetween: 30,

    pagination: {
      //@ts-ignore
      el: ".gallery-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 25,
      },
      767: {
        slidesPerView: 1.4,
        spaceBetween: 25,
      },
    },
  });
};
