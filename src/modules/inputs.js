const inputs = () => {

  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('input', (e) => {

      const faultCalc = /\D/g
      const faultName = /[^а-я\s]/gi 
      const faultEmail = /[^a-z\@\-\_\.\!\~\*\']/gi 
      const faultPhone = /[^\d\(\)\-\+]/gi 
      const faultMsg = /[^а-я\s\d\.\,\!\?\"\-]/gi

      if(e.target.closest('.calc-block')) {
        e.target.value = e.target.value.replace(faultCalc, '');
      }
      if(e.target.closest('.form-name')) {
        e.target.value = e.target.value.replace(faultName, '');
      }
      if(e.target.closest('.form-email')) {
        e.target.value = e.target.value.replace(faultEmail, '');
      }
      if(e.target.closest('.form-phone')) {
        e.target.value = e.target.value.replace(faultPhone, '');
      }
      if(e.target.closest('.mess')) {
        e.target.value = e.target.value.replace(faultMsg, '')
      }
    })
  })
};

export default inputs;