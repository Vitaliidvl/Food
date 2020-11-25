const slides = document.querySelectorAll('.offer__slider'),
  prev = document.querySelector('.offer__slider-prev'),
  next = document.querySelector('.offer__slider-next'),
  total = document.querySelector('#total'),
  current = document.querySelector('#current');

let slideIndex = 1;

showSlides(slideIndex);

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
} else {
  total.textContent = slides.length;
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = 'none'));

  slides[slideIndex - 1].style.display = 'block';

  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
  } else {
    current.textContent = slideIndex;
  }
}
function plusSlides(n) {
  showSlides((slideIndex += n));
}

prev.addEventListener('click', () => {
  plusSlides(-1);
});
next.addEventListener('click', () => {
  plusSlides(1);
});

// getResource('http://localhost:3000/menu')
// .then(data => {
//    data.forEach(({img, altimg, title, descr, price}) => {
//     new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//    });
// });

// getResource('http://localhost:3000/menu')
// .then(data => createCard(data));

// function createCard(data) {
//     data.forEach(({img, altimg, title, descr, price}) => {
// const element = document.createElement('div');
// const price2 = (price * 28.6).toFixed();
// element.classList.add('menu__item');
// element.innerHTML = `
// <img src=${img} alt=${altimg}>
//     <h3 class="menu__item-subtitle">${title}</h3>
//     <div class="menu__item-descr">${descr}</div>
//     <div class="menu__item-divider"></div>
//     <div class="menu__item-price">
//     <div class="menu__item-cost">Цена:</div>
//     <div class="menu__item-total"><span>${price2}</span> грн/день</div>
// </div>
// `;
//     document.querySelector('.menu .container').append(element);
//     });
// }

//Forms

// const forms = document.querySelectorAll('form');

// const message = {
//     loading: 'загрузка',
//     success: 'Дякую, скоро ми з Вами звяжемся',
//     failure: 'Щось пішло не так...'
// };

// forms.forEach(item => {
//     postData(item);
// });

// function postData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         statusMessage.textContent = message.loading;
//         form.append(statusMessage);

//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');
//         request.setRequestHeader('Content-type', 'multypart/form-data'); //Ізза того не получили дані
//         const formData = new FormData(form);

//         request.send(formData);

//         request.addEventListener('load', () => {
//             if (request.status === 200) {
//                 console.log(request.response);
//                 statusMessage.textContent = message.success;

//             } else {
//                 statusMessage.textContent = message.failure;

//             }
//         });
//     });
// }
