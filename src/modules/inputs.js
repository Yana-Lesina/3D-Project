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
        alert('ошибок нет, данные ушли на сервер');
      } else {
        alert(`Найдены ошибки:\nfaultName=${faultName}\nfaultEmail=${faultEmail}\nfaultPhone=${faultPhone}`);
      }
    }); 
  })
};

export default inputs;