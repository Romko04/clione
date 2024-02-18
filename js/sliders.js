// Перевірка наявності елементів перед створенням swiper
const swiperElement1 = document.querySelector('.swiper--products');
if (swiperElement1) {
    const swiper = new Swiper(swiperElement1, {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4.1,
                spaceBetween: 20,
            }
        }
    });
}

const swiperElement2 = document.querySelector('.swiper--comparator__mobile');
if (swiperElement2) {
    const swiper2 = new Swiper(swiperElement2, {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next--comparator',
            prevEl: '.swiper-button-prev--comparator',
        },
        allowTouchMove: false,
    });
}

const swiperElement3 = document.querySelector('.swiper--metalt');
if (swiperElement3) {
    const swiper3 = new Swiper(swiperElement3, {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination--metalt',
        },
    });
}

const swiperElement4 = document.querySelector('.swiper--instagram');
if (swiperElement4) {
    const swiper4 = new Swiper(swiperElement4, {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination--instagram',
        },
    });
}

const swiperElement5 = document.querySelector('.reviews__slider');
if (swiperElement5) {
    const swiper5 = new Swiper(swiperElement5, {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next--reviews',
            prevEl: '.swiper-button-prev--reviews',
        },
    });
}


const swiperElement6 = document.querySelector('.products__slider--plamine__cosmeticks');

if (swiperElement6) {
    const swiper6 = new Swiper(swiperElement6, {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next--cosmeticks',
            prevEl: '.swiper-button-prev--cosmeticks',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4.1,
                spaceBetween: 20,
            }
        }
    });
}


const swiperElement7 = document.querySelector('.products__slider--plamine__accessories');

if (swiperElement7) {
    const swiper7 = new Swiper(swiperElement7, {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next--accessories',
            prevEl: '.swiper-button-prev--accessories',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4.1,
                spaceBetween: 20,
            }
        }
    });
}

const swiperElement8 = document.querySelector('.products__slider--plamine__videos')

if (swiperElement8) {
    const swiper8 = new Swiper(swiperElement8, {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next--videos',
            prevEl: '.swiper-button-prev--videos',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });
}


const swiperElement9 = document.querySelector('.modes__slider')

if (swiperElement9) {
    const swiper9 = new Swiper(swiperElement9, {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next--modes',
            prevEl: '.swiper-button-prev--modes',
        },
    });
}


const swiperElement10 = document.querySelector('.swiper--cooperation')

if (swiperElement10) {
    const swiper10 = new Swiper(swiperElement10, {
        slidesPerView: 6,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next--cooperation',
            prevEl: '.swiper-button-prev--cooperation',
        },
    });
}




