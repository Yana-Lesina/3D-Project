const inputs = () => {
  const calcInputs = document.querySelectorAll('.calc-block > input');
  calcInputs.forEach(inp => {
    inp.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  });

  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const fName = form.querySelector('.form-name');
    const fEmail = form.querySelector('.form-email');
    const fPhone = form.querySelector('.form-phone');

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const faultName = /[^а-я\s\-]/gi.test(fName.value)
      const faultEmail = /[^a-z\@\-\_\.\!\~\*\']/gi.test(fEmail.value) 
      const faultPhone = /[^\d\(\)\-]/gi.test(fPhone.value) 

      if(!faultName && !faultEmail && !faultPhone) {
        alert('Данные отправлены');
        fName.value = ''
        fEmail.value = ''
        fPhone.value = ''

        fName.attributes.placeholder.textContent = 'Ваше имя'
        fEmail.attributes.placeholder.textContent = 'E-mail'
        fPhone.attributes.placeholder.textContent = 'Номер телефона'
        
      } else {
        if(faultName) {
          fName.value = ''
          fName.attributes.placeholder.textContent = 'Только кириллица, дефис и пробел'
        } 
        if (faultEmail) {
          fEmail.value = ''
          fEmail.attributes.placeholder.textContent = 'Только латиница и  @  -  _  . ! ~ * \''
        } 
        if (faultPhone) {
          fPhone.value = ''
          fPhone.attributes.placeholder.textContent = 'Только цифры, (), - '
        }
      }
    }); 
  })
};

export default inputs;