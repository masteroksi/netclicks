// console.error('hello');
// menu
const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');
const tvShowsList = document.querySelector('.tv-shows__list');


// open/close/nenu бургерное меню,
hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});
document.addEventListener('click', (evt => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');

    }

}));
leftMenu.addEventListener('click', (event) => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');

    }

});


// modal При наведении мышки на карточки заменять картинку в src на картинку
// из data-backdrop, когда мышку с карточки уводим, менять обратно на ту которая была

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const modalCross = document.querySelector('.cross');

// вешаем событие клика на карточку
tvShowsList.addEventListener('click', (event) => {
    // const {target} = event;
    // Берем у ивента target элемент на который кликнули
    const target = event.target;
    // Ищем у элемента родитель с классом .tv-...
    const card = target.closest('.tv-card');

    // Если нашли родителя то показываем модалку
    if (card) {
        openModal();
    }
});

const openModal = () => {
    document.body.style.overflow = 'hidden';
    modal.classList.remove('hide');
};

const closeModal = () => {
    document.body.style.overflow = '';
    modal.classList.add('hide');
};

// закрыть модалку при клике на крестик
modalCross.addEventListener('click', closeModal);
// закрыть модалку при клике на контейнер модалки (который на весь экран)
modal.addEventListener('click', closeModal);
// при клике на контент модалки не пропускать событие до контейнера модалки
modalContent.addEventListener('click', (ev) => {
    ev.stopPropagation();
});
// modal end

 // change-card способ №-1
// const changeImage = event => {
//     const card = event.target.closest('.tv-shows__item');
//     if (card) {
//         // определили наши картинки
//         const img = card.querySelector('.tv-card__img');
//         const changeImg = img.dataset.backdrop;
//         // поменяли местами картинки
//         if (changeImg){
//             img.dataset.backdrop = img.src;
//             img.src = changeImg;
//         }
//
//     // const target = event.target;
//     // if (target.matches('.tv-card__img')){
//     }
// };

// способ №2 деструктизация массива
const changeImage = event => {
    const card = event.target.closest('.tv-shows__item');
    if (card){
        const img = card.querySelector('.tv-card__img');
        if (img.dataset.backdrop){
            [img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src]
        }
    }
};


tvShowsList.addEventListener('mouseover',changeImage);
tvShowsList.addEventListener('mouseout',changeImage);
