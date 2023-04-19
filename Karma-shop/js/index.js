// console.log("narendra")
// const date=new Date;
// console.log(date)
// const D=document.querySelector(".days")
// const H=document.querySelector(".hours")
// const M=document.querySelector(".minuts")
// var days=00;
// var hours=00;
// var minuts=00;
// var seconds=00
// let i=3
// while(i>=1){
//     i--;
//     setTimeout(()=>{
// console.log(i)
// return i
//     },1000)
// }
// window.onload=function(){
//     function timer(){
//         document.querySelector(".seconds").innerHTML=date.getMinutes()
//         const M=document.querySelector(".minuts").innerHTML=date.getSeconds()
    
//     }
//     setInterval(()=>{
//         timer()
//     },1000)
// }


var countDownDate = new Date("march 27, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   const D=document.querySelector(".days").innerHTML=days-1
  const H=document.querySelector(".hours").innerHTML=hours-1
  const M=document.querySelector(".minuts").innerHTML=minutes-1
  const S=document.querySelector(".seconds").innerHTML=seconds-1 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);