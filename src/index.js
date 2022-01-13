import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import inputs from './modules/inputs'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'


timer('01 june 2022 7:00:00');
menu()
modal()
inputs()
tabs()
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots')
calc(100)

const forms = document.querySelectorAll('form');
if(forms.length !== 0) {
  forms.forEach(form => {

    sendForm({
      formId: form.id, 
      someElem: [
        {
          type: 'block', 
          id: 'total'
        }
      ]
    })

  })
} else {
  console.log('Упс.. Формы потерялись..')
}

