const handSec = document.querySelector(".hand-second");
const HandMin = document.querySelector(".hand-min");
const handHour = document.querySelector(".hand-hour");
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds*6)) + 90;
  handSec.style.transform ='rotate('+secondsDegree+'deg)';

  const mins = now.getMinutes();
  const minDegree = ((mins*6) + 90);

  HandMin.style.transform ='rotate('+minDegree+'deg)';

   var hours = now.getHours();
   if(hours >= 12 ) hours = hours-12;
   if(hours >= 6 ) hours++;
   const houreDegree = ((hours*30)) + 90;
handHour.style.transform ='rotate('+houreDegree+'deg)';

  console.log(hours);
  console.log(mins);
  console.log(seconds);

}
  setInterval(setDate,1000);
