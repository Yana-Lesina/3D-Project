(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let m;const s=e=>e<10?e="0"+e:e;m=setInterval((function(){console.log("updateClock!");let e=(()=>{let e=(new Date("1 december 2021 9:30:00").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>0?(t.textContent=s(e.hours),n.textContent=s(e.minutes),o.textContent=s(e.seconds)):(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(m))}),1e3)})()})();