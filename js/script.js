const menuBody = document.querySelector('.menu__body');
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4.1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// Отримуємо всі елементи меню з підменюшками
let menuItems = document.querySelectorAll(".header__menu-item--catalog");

// Проходимося по кожному елементу меню
menuItems.forEach(function (menuItem) {
    let subMenu = menuItem.querySelector(".sub-menu");
    let timeout;

    // Функція для показу підменю
    function showSubMenu() {
        clearTimeout(timeout);
        subMenu.classList.add("active");
    }

    // Функція для приховування підменю
    function hideSubMenu() {
        timeout = setTimeout(function () {
            subMenu.classList.remove("active");
        }, 300); // Затримка перед закриттям підменю (в мілісекундах)
    }

    // Додаємо обробники подій для кожного елементу меню
    menuItem.addEventListener("mouseenter", showSubMenu);
    menuItem.addEventListener("mouseleave", hideSubMenu);

    subMenu.addEventListener("mouseenter", showSubMenu);
    subMenu.addEventListener("mouseleave", function (event) {
        // Перевіряємо, чи курсор покинув підменю і не повертається на батьківський елемент меню
        if (!menuItem.contains(event.relatedTarget) && event.relatedTarget !== menuItem) {
            hideSubMenu();
        }
    });
});


// Отримуємо всі елементи .ticker-animation
const tickerItems = document.querySelectorAll('.ticker-animation');

// Функція для оновлення прозорості елементів
function updateOpacity() {
    tickerItems.forEach((item, index) => {
        // Отримуємо розміри та положення контейнера та елемента
        const containerRect = item.parentElement.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        // Обчислюємо відстань від лівого краю контейнера до лівого краю елемента
        const distanceFromLeft = itemRect.left - containerRect.left;

        // Обчислюємо прозорість від 0 до 1 в залежності від відстані
        let opacity = 1 - (distanceFromLeft / containerRect.width);
        opacity = Math.max(opacity, 0.1);

        // Задаємо стиль прозорості з використанням плавної анімації
        item.style.transition = 'opacity 0.5s ease-in-out'; // Збільшуємо тривалість анімації і використовуємо згладжену функцію зміни швидкості
        item.style.opacity = opacity;
    });
}

// Викликаємо функцію оновлення прозорості
updateOpacity();

// Функція для виклику оновлення прозорості кожного кадру анімації
function animate() {
    // Викликаємо оновлення прозорості
    updateOpacity();

    // Просимо викликати цю функцію на наступному кадрі анімації
    requestAnimationFrame(animate);
}

// Починаємо анімацію
animate();
// Event listeners
document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('anchor')) {
        anchorClick(e.target)
    }
    if (e.target.classList.contains('header__burger')) {
        toggleMenu()
    }
})


function anchorClick(e) {
    const activeAnchor = document.querySelector('.menu__link-active')
    activeAnchor.classList.remove('menu__link-active')
    e.classList.add('menu__link-active')
    if (menuBody.classList.contains('active')) {
        toggleMenu()
    }
    const blockId = e.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    })
}
function toggleMenu() {
    const btn = document.querySelector('.header__burger');
    menuBody.classList.toggle('active');
    btn.classList.toggle('active');
    btn.classList.contains('active') ? document.body.classList.add('scroll--block') : document.body.classList.remove('scroll--block')
}


const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    const container = slider.closest('.containe');
    const btn = container.querySelector('input[type="range"]');

    btn.addEventListener('input', (e) => {
        console.log(e.target.value);
        container.style.setProperty('--position', `${e.target.value}%`);
    });
});
