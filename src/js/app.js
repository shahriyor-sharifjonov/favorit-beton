import * as functions from "./modules/functions.js"
import $ from 'jquery'

functions.isWebp()

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

new Swiper(".clients__swiper", {
  modules: [Navigation, Autoplay, Pagination],
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 17,
  // autoplay:{
  //     delay: 2000,
  // },
  navigation: {
    nextEl: ".clients__button-next",
    prevEl: ".clients__button-prev",
  },
  pagination: {
    el: ".clients__pagination",
    clickable: true,
  },
  breakpoints:{
    1200:{
      slidesPerView: 6,
      spaceBetween: 30,
    },
    992:{
      slidesPerView: 4,
    },
    768:{
     slidesPerView: 3,
     spaceBetween: 20,
    },
  }
});

new Swiper(".certificates__swiper", {
  modules: [Navigation, Autoplay, Pagination],
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 10,
  // autoplay:{
  //     delay: 2000,
  // },
  navigation: {
    nextEl: ".certificates__button-next",
    prevEl: ".certificates__button-prev",
  },
  pagination: {
    el: ".certificates__pagination",
    clickable: true,
  },
  breakpoints:{
    1200:{
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768:{
     slidesPerView: 3,
     spaceBetween: 20,
    },
  }
});

const headerButton = document.querySelector(".header__button")
const headerMenu = document.querySelector(".header__menu")
const header = document.querySelector(".header")
let menuOpened = false
const menuToggle = () => {
  menuOpened = !menuOpened
  headerButton.classList.toggle("open")
  headerMenu.classList.toggle("open")
  header.classList.toggle("open")
}

headerButton.onclick = menuToggle

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle()
}

$(document).ready(function() {
    $(".accordion > .accordion__button").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".accordion__content")
                .slideUp(200);
        } else {
            $(".accordion > .accordion__button").removeClass("active");
            $(this).addClass("active");
            $(".accordion__content").slideUp(200);
            $(this)
                .siblings(".accordion__content")
                .slideDown(200);
        }
    });
});

if(document.querySelector('.price__tab')){
  const tabs = document.querySelectorAll('.price__tab');
  const contents = document.querySelectorAll('.price__content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      contents.forEach(content => {
        content.classList.remove('active');
      })
      tabs.forEach(tab => {
        tab.classList.remove('active');
      })
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      const el = document.querySelector(target);
      el.classList.add('active')
    })
  })
}

const opens = document.querySelectorAll('.open-popup');
const closs = document.querySelectorAll('.popup-close');

opens.forEach(open => {
  open.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');
    const popup = document.getElementById(target);
    popup.classList.add('active')
  })
})

closs.forEach(close => {
  close.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      popup.classList.remove('active')
    })
  })
})