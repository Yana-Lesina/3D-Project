const sendForm = ( {formId, someElem = []} ) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка отправки'
  const successText = 'Спасибо, заявка принята! Наш менеджер скоро свяжется с Вами'


  const validate = (list) => {
    let ifSuccess = true

    list.forEach(input => {
      if(input.value === '') ifSuccess = false 
    })

    return ifSuccess
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then((res) => res.json())
  }

  const submitForm = () => {
    const formElems = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    statusBlock.style.color = '#fff'
    form.append(statusBlock)

    formData.forEach((value, key) => {
      formBody[key] = value
    })

    someElem.forEach(elem => {
      const pageElem = document.getElementById(elem.id)

      if(elem.type === 'block') {
        formBody[elem.id] = pageElem.textContent //добавление formBody свойства elem.id
      } else if (elem.type === 'input') {
        formBody[elem.id] = pageElem.value;
      }
    })

    if(validate(formElems)) {
      sendData(formBody)
        .then((data) => {
            statusBlock.textContent = successText;
            formElems.forEach(fElem => {
              fElem.value = '';
            })

            console.log(data)
        })
        .catch(error => {
            statusBlock.textContent = errorText;
        })
       
    } else {
      alert('В форму введены не все данные');
    }
  }


  try {
    if(!form) {
      throw new Error('Положи форму на место, а не сайт(!)')
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