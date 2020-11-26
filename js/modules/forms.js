function forms() {
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Дякую, скоро ми з Вами звяжемся',
    failure: 'Щось пішло не так...',
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: data,
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
              display: block;
              margin: 0 auto;
              `;

      form.insertAdjacentElement('afterend', statusMessage);

      // request.setRequestHeader('Content-type', 'multypart/form-data'); //Ізза того не получили дані
      //request.setRequestHeader();
      const formData = new FormData(form);

      // const object = {};
      // formData.forEach(function (value, key) {
      //     object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        // fetch('server.php', {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     body: JSON.stringify(object)
        //     },
        // })
        // .then(data => data.text())
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      // request.send(formData);

      // request.addEventListener('load', () => {
      //     if (request.status === 200) {
      //         console.log(request.response);
      //         showThanksModal(message.success);
      //         form.reset();
      //         statusMessage.remove();

      //     } else {
      //         showThanksModal(message.failure);

      //     }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //     total.textContent = `0${slides.length}`;

  // } else {
  //     total.textContent = slides.length;
  // }

  // function showSlides(n) {
  //     if (n > slides.length) {
  //    slideIndex = 1;
  //     }
  //     if (n < 1) {
  //   slideIndex = slides.length;
  //     }

  // slides.forEach(item => item.style.display = 'none');

  // slides[slideIndex -1].style.display = 'block';

  // if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;

  //    } else {
  //     current.textContent = slideIndex;
  //   }
  // }
  // function plusSlides(n) {
  //     showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', () => {
  // plusSlides(-1);
  // });
  // next.addEventListener('click', () => {
  // plusSlides(1);
  // });

  //Fetch API
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: "POST",
  //     body: JSON.stringify({ name: 'Vitalii'}),
  //     headers: {
  //         'Content-type': 'application/json'
  //     }
  // })
  // .then(response => response.json())
  // .then(json => console.log(json));

  fetch('http://localhost:3000/menu')
    .then((data) => data.json())
    .then((res) => console.log(res));
}
module.exports = forms;