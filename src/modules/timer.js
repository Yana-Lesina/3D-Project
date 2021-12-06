const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  let timeMemory = {};
  //сюда будет записано время из localeStorage и передано в timerHours,timerMinutes,timerSeconds
  //для отображения времени без скачков с 00 при перезагрузке стр

  let refresh //интервальное обновление времени

  const checkForZero = (num) => { return num < 10 ? num = '0' + num : num };

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    //запись времени в память 
    localStorage.clear()
    localStorage.setItem('timeMemo', JSON.stringify( {hours, minutes, seconds} ));

    return { timeRemaining, hours, minutes, seconds }
  }

  const updateClock = function() {
    let getTime = getTimeRemaining()

    if(getTime.timeRemaining > 0) {
      
      timerHours.textContent = checkForZero(getTime.hours);
      timerMinutes.textContent = checkForZero(getTime.minutes);
      timerSeconds.textContent = checkForZero(getTime.seconds);

    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      clearInterval(refresh)
    }
  }

  //достаём из localStorage время и записываем вместо 00
  if(localStorage.getItem('timeMemo') !== null) {
    timeMemory = JSON.parse(localStorage.getItem('timeMemo'));
    timerHours.textContent = checkForZero(timeMemory.hours);
    timerMinutes.textContent = checkForZero(timeMemory.minutes);
    timerSeconds.textContent = checkForZero(timeMemory.seconds);
  } else {
    timeMemory = {}
  }

  refresh = setInterval(updateClock, 1000);//перезапуск функции через каждую 1 с
}

export default timer