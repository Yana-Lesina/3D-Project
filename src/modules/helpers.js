//используется для calc и анимации появления modalContent
const  animate = ({timing, draw, duration}) => {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};


//анимация исчезновения модального окна
  const animateModalClose = ({duration, draw, timing}) => {
    let start = performance.now();

    requestAnimationFrame(function animateModalClose(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(1.5, timeFraction)

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animateModalClose);
      } 
    });
  };

export { animate, animateModalClose }

