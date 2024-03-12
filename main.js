const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 26,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoHeight: true,
    breakpoints: {
        // when window width is <= 1439px
        1440: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});
