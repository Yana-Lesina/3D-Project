const sendForm = ( {formId, someElem = []} ) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const preloader = document.createElement('div')
  // const loadText = 'Загрузка...'
  const errorText = 'Ошибка отправки'
  const successText = 'Спасибо, заявка принята! Наш менеджер скоро свяжется с Вами'

  const validateInput = (input, validValue, errorMsg, defaultMsg) => {
 
    if(!validValue.test(input.value)) {
      input.value = ''
      input.attributes.placeholder.textContent = errorMsg;
    } else {
      input.attributes.placeholder.textContent = defaultMsg;
    }
  };

  const validate = (list) => {
    let ifSuccess = true;

    const validName = /^([а-я]{2,}\s?)+$/gi,
          validMail = /^[\w\-\.]+@([\w]+\.)+[\w]{2,6}$/g,
          validPhone = /^\+?[\d]{11,12}$/;

    list.forEach(input => {
      
      if(input.closest('.form-name')) validateInput(input, validName, 'Слишком короткое имя', 'Ваше имя');
      if(input.closest('.form-email')) validateInput(input, validMail, 'Некорректный email', 'E-mail');
      if(input.closest('.form-phone')) validateInput(input, validPhone, 'Должно быть 11-12 цифр', 'Номер телефона');

      if(input.value === '') ifSuccess = false;

    });

    return ifSuccess;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElems = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.innerHTML = '' //очистка для повторной загрузки
    preloader.classList.add('lds-ellipsis');
    preloader.innerHTML = '<div></div><div></div><div></div><div></div>'
    statusBlock.append(preloader);
    statusBlock.style.color = '#fff'; //белый цвет текстов-статусов 
    form.append(statusBlock);

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    someElem.forEach(elem => {
      const pageElem = document.getElementById(elem.id);

      if(elem.type === 'block') {
        formBody[elem.id] = pageElem.textContent; //добавление formBody свойства elem.id
      } else if (elem.type === 'input') {
        formBody[elem.id] = pageElem.value;
      }
    });

    if(validate(formElems)) {
      sendData(formBody)
        .then((data) => {
            statusBlock.innerHTML = ''
            statusBlock.textContent = successText;
            formElems.forEach(fElem => {
              fElem.value = '';
            })
        })
        .catch(error => {
            statusBlock.innerHTML = ''
            statusBlock.textContent = errorText;
        });
       
    } else {
      alert('В форму введены не все данные или допущены ошибки');
      statusBlock.textContent = '';
    }
  };


  try {
    if(!form) {
      throw new Error('Положи форму на место, а не сайт(!)');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });

  } catch(err) {
    console.error(err.message)
  }
  
};

export default sendForm;