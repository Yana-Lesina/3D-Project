(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let l;const r=e=>e<10?e="0"+e:e;l=setInterval((function(){let e=(()=>{let e=(new Date("1 december 2021 9:30:00").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>0?(t.textContent=r(e.hours),n.textContent=r(e.minutes),o.textContent=r(e.seconds)):(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(l))}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul > li > a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content");let l,r,c=0;const a=()=>{c<=100?(c+=7,l=requestAnimationFrame(a),o.style.top=`${c}px`):c>100&&cancelAnimationFrame(l)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",document.body.clientWidth>780?a():o.style.top="100px"}))})),n.addEventListener("click",(()=>{document.body.clientWidth>780?(({duration:t,draw:n,timing:o})=>{let l=performance.now();requestAnimationFrame((function a(u){let i=(u-l)/t;r=o(1.5,i),n(r),i<1?requestAnimationFrame(a):(e.style.display="none",c=0)}))})({duration:1e3,timing:function(e,t){return Math.pow(t,2)*((e+1)*t-e)},draw:function(){o.style.top=100+550*r+"px"}}):(e.style.display="none",c=0)}))})(),document.querySelectorAll(".calc-block > input").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/g,"")}))})),document.querySelectorAll("form").forEach((e=>{const t=e.querySelector(".form-name"),n=e.querySelector(".form-email"),o=e.querySelector(".form-phone");e.addEventListener("submit",(e=>{e.preventDefault();const l=/[^а-я\s\-]/gi.test(t.value),r=/[^a-z\@\-\_\.\!\~\*\']/gi.test(n.value),c=/[^\d\(\)\-]/gi.test(o.value);l||r||c?(l&&(t.value="",t.attributes.placeholder.textContent="Только кириллица, дефис и пробел"),r&&(n.value="",n.attributes.placeholder.textContent="Только латиница и  @  -  _  . ! ~ * '"),c&&(o.value="",o.attributes.placeholder.textContent="Только цифры, (), - ")):(alert("Данные отправлены"),t.value="",n.value="",o.value="",t.attributes.placeholder.textContent="Ваше имя",n.attributes.placeholder.textContent="E-mail",o.attributes.placeholder.textContent="Номер телефона")}))}))})();