const swiper = new Swiper('.swiper--products', {
    // Optional parameters
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // При ширині до 1024px
        1024: {
            slidesPerView: 4.1,
            spaceBetween: 20,
        }
    }

});


const swiper2 = new Swiper('.swiper--comparator__mobile', {
    // Optional parameters
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: false,
});


const swiper3 = new Swiper('.swiper--metalt', {
    // Optional parameters
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination--metalt',
    },
});

const swiper4 = new Swiper('.swiper--instagram', {
    // Optional parameters
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination--instagram',
    },
});



