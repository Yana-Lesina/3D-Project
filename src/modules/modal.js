const modal = () => {
  const modal = document.querySelector('.popup')
  const btns = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')

  const popubContent = modal.querySelector('.popup-content')

  // Math.round(popubContent.getBoundingClientRect().height))

  let inter1;
  let inter2;
  let num = 0;

  const moveModalContent = () => {

    if(num <= 100 ) {
      num += 10
      inter1 = requestAnimationFrame(moveModalContent)
      popubContent.style.top = `${num}px`

    } else if (num > 100 ) {
      cancelAnimationFrame(inter1)
    }
  }

  // const removeModalContent = () => {
    
  //   if(num <= modal.clientHeight) {
  //     num += 20
  //     inter2 = requestAnimationFrame(removeModalContent)
  //     popubContent.style.top = `${num}px`

  //   } else {
  //     cancelAnimationFrame(inter2)
  //     modal.style.display = 'none'
  //     num = 0
  //   }
  // }


  const animate = ({duration, draw, timing}) => {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction)

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'
      moveModalContent()
      
    })
  })

  closeBtn.addEventListener('click', () => {
      //removeModalContent()
      //modal.style.display = 'none'
      //if(num <= modal.clientHeight) {
        animate({
          duration: 1000,
          timing: function back(x, timeFraction) {
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
          },
          draw: function () {
            popubContent.style.bottom = progress * 500 + 'px'
          }
        })
      //}

      
  })
}

export default modal