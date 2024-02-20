

// Анімація для горизонтальних бігучих строк
const tickerItems = document.querySelectorAll('.ticker-animation');

function updateOpacity() {
    tickerItems.forEach((item, index) => {
        const containerRect = item.parentElement.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const distanceFromLeft = itemRect.left - containerRect.left;

        // Обчислюємо відсоток прогресу по шляху
        const progress = distanceFromLeft / containerRect.width;

        // Використовуємо квадратичну функцію для плавної зміни прозорості
        let opacity = 1 - Math.pow(progress, 2);
        opacity = Math.max(opacity, 0.1);

        // Задаємо плавний перехід прозорості
        item.style.transition = 'opacity 0.5s ease-in-out';
        item.style.opacity = opacity;
    });
}
updateOpacity();




// Анімація для вертикальних бігучих строк
function updateOpacityVertical() {
    const verticalTextSpans = document.querySelectorAll('.vertical-text > span');
    const containerHeight = document.querySelector('.goods__content').offsetHeight;

    verticalTextSpans.forEach((item, index) => {
        const containerRect = item.parentElement.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const distanceFromTop = itemRect.top - containerRect.top;
        const containerHeight = containerRect.bottom - containerRect.top;

        // Обчислюємо відсоток прогресу по шляху
        const progress = 1 - (distanceFromTop / containerHeight);

        // Використовуємо квадратичну функцію для плавної зміни прозорості
        let opacity = 1 - Math.pow(progress, 2);
        opacity = Math.max(opacity, 0.1);

        // Задаємо плавний перехід прозорості
        item.style.opacity = opacity;
    });
}


// Викликаємо функцію один раз при завантаженні сторінки, щоб ініціалізувати прозорість
updateOpacityVertical();
