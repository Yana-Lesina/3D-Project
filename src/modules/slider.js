const slider = (sliderClass, sliderItemsClass, dotClass) => {
  const sliderBlock = document.querySelector(sliderClass);
  const sliders = document.querySelectorAll(sliderItemsClass);
  const dotsBlock = document.querySelector(dotClass); //получение ul всех li class=dot

  if(sliderBlock === null || sliders === null || dotsBlock === null) return
  
  const timeInterval = 2000
  let currentSlide = 0
  let interval


  for (let i = 0; i < sliders.length; i++) {
    const newLi = document.createElement('li')
    
    if(i === 0) newLi.classList.add('dot-active') 
    newLi.classList.add('dot')
    
    dotsBlock.append(newLi);
  }
  const dots = document.querySelectorAll('.dot'); //теперь в вёрстку добавлены все li и их можно получать


  const prevSlide = (elems, i, strClass) => {
    elems[i].classList.remove(strClass)
  }

  const nextSlide = (elems, i, strClass) => {
     elems[i].classList.add(strClass)
  }

  const autoSlide = () => {
    prevSlide(sliders, currentSlide, 'portfolio-item-active')
    prevSlide(dots, currentSlide, 'dot-active')
    currentSlide++
    
    if(currentSlide >= sliders.length) {
      currentSlide = 0
    }
    nextSlide(sliders, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  }

  const stopSlide = () => {
    clearInterval(interval)
  }


  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault()

    if(!e.target.matches('.dot, .portfolio-btn')) {
      return;
    }
   
    prevSlide(sliders, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if(e.target.matches('#arrow-right')) {
        currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
        currentSlide--;
    } else if (e.target.classList.contains('dot')) {
        dots.forEach ((dot, i) => {
          if(e.target === dot) {
            currentSlide = i;
          }
        });
    }

    if(currentSlide >= sliders.length) {
      currentSlide = 0;
    }
    if(currentSlide < 0) {
      currentSlide = sliders.length - 1;
    }

    nextSlide(sliders, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });


  sliderBlock.addEventListener('mouseenter', (e) => {
    if(e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if(e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval);
    }
  }, true);



  startSlide(timeInterval);
};

export default slider;