const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  let refresh //интервальное обновление времени

  const checkForZero = (num) => { return num < 10 ? num = '0' + num : num }

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return { timeRemaining, hours, minutes, seconds }
  }

  const updateClock = function() {
    console.log('updateClock!');
    
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
  
  refresh = setInterval(updateClock, 1000);
}

export default timer