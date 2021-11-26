import { animate, animateModalClose } from './helpers'

const modal = () => {
  const modal = document.querySelector('.popup');
  const btns = document.querySelectorAll('.popup-btn');
  const modalContent = modal.querySelector('.popup-content')

  const num = 150 //выдвижение modal на num пикселей, исчезновение modal начинается с modal.style.top = num 

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'    
      
      if(document.body.clientWidth > 780) {
        animate({
          duration: 340,
          timing: function quad(timeFraction) {
            return Math.pow(timeFraction, 3)
          },
          draw(progress) {
            modalContent.style.top = `${num * progress}px`
          }
        })
        
      } else {
        modalContent.style.top = `${num}px`
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      
      if(document.body.clientWidth > 780) {
        animateModalClose({
          duration: 1000,
          timing: function back(x, timeFraction) {
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
          },
          draw(progress) {
            modalContent.style.top = `${num + progress * 550}px`

            if(progress === 1) {
              modal.style.display = 'none'
            }
          }
        })

      } else {
        modal.style.display = 'none' 
      } 
    }
  })
};

export default modal