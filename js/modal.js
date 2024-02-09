const input = document.querySelector("#phone");
const button = document.querySelector(".button--submit");
const errorMsg = document.querySelector("#error-msg");


// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];


const iti = window.intlTelInput(input, {
    initialCountry: "ua",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // just for formatting/placeholders etc
});






// const reset = () => {
//     input.classList.remove("error");
//     errorMsg.innerHTML = "";
//     errorMsg.classList.add("hide");
// };

// // on click button: validate
// button.addEventListener('click', () => {
//     reset();
//     if (input.value.trim()) {
//         if (iti.isValidNumber()) {
//             de
//             validMsg.classList.remove("hide");
//         } else {
//             input.classList.add("error");
//             const errorCode = iti.getValidationError();
//             errorMsg.innerHTML = errorMap[errorCode] || "Invalid number";
//             errorMsg.classList.remove("hide");
//         }
//     }
// });

// // on keyup / change flag: reset
// input.addEventListener('change', reset);
// input.addEventListener('keyup', reset);









let openPopupsCount = 0; // Лічильник відкритих попапів

// Функція для відкриття попапу
function openPopup(form) {
    const body = document.querySelector('body');
    const unlockPopup = true; // Потрібно перевірити, чому вам треба ця змінна, і можливо змінити її значення відповідно до ваших потреб

    if (unlockPopup) {
        body.classList.add('body--lock');
        form.classList.add('active');
        openPopupsCount++; // Збільшуємо лічильник відкритих попапів
    }
}

// Функція для закриття попапу
function closePopup(form) {
    const body = document.querySelector('body');

    form.classList.remove('active');
    openPopupsCount--; // Зменшуємо лічильник відкритих попапів
    if (openPopupsCount === 0) {
        body.classList.remove('body--lock'); // Відкриваємо скрол, якщо всі попапи закриті
    }
}

// Обробник кліків
window.addEventListener('click', (e) => {
    if (e.target.closest('.second--button')) {
        const popup = document.querySelector('#single');
        openPopup(popup); // Відкриття попапу при кліку на .second--button
    }
    if (e.target.closest('.cart--button')) {
        const popup = document.querySelector('#cart');
        openPopup(popup); // Відкриття попапу при кліку на .second--button
    }

    if (!e.target.closest('.popup__content') || e.target.closest('.popup__close')) {
        const popup = e.target.closest('.popup--form');
        if (popup) {
            e.preventDefault();
            closePopup(popup); // Закриття попапу при кліку поза попапом або на кнопці закриття
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const mainPhoto = document.querySelector('.popup__main-photo img');
    const thumbnails = document.querySelectorAll('.popup__thumbnail img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const thumbnailSrc = this.getAttribute('src');
            mainPhoto.setAttribute('src', thumbnailSrc);
        });
    });
});



// Отримуємо всі елементи .product__quantity
const quantityElements = document.querySelectorAll('.product__quantity');

// Додаємо обробник подій для кожного .product__quantity
quantityElements.forEach(quantityElement => {
    const minusBtn = quantityElement.querySelector('.minus');
    const plusBtn = quantityElement.querySelector('.plus');
    const input = quantityElement.querySelector('.quantity__input');

    minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let value = parseInt(input.value);
        value = isNaN(value) ? 0 : value;
        value = Math.max(value - 1, 0);
        input.value = value;
        if (value === 0) {
            // Якщо кількість стане 0 або від'ємною, видаляємо продукт
            deleteProduct(e ,quantityElement);
        }
    });

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let value = parseInt(input.value);
        value = isNaN(value) ? 0 : value;
        input.value = value + 1;
    });
});

function deleteProduct(e,quantityElement) {
    e.preventDefault();
    // Видалення продукту або виконання вашої логіки
    // Наприклад:
    const productItem = quantityElement.closest('.product__item');
    if (productItem) {
        productItem.remove();
    }
}
