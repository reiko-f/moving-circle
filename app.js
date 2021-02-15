let title = document.getElementById('title');
let circleContainer = document.querySelector('.circle-container');
let circle1 = document.querySelector('.circle-1');
let circle2 = document.querySelector('.circle-2');
let circle3 = document.querySelector('.circle-3');
let circle4 = document.querySelector('.circle-4');
let circle5 = document.querySelector('.circle-5');

let start = document.querySelector('.start-btn');
start.addEventListener('click', startMoving);

let stop = document.querySelector('.stop-btn');
stop.addEventListener('click', stopMoving);

let totalTime = 12000;

function startMoving() {

  setTimeout(function() {
    
      circle1.style.background = 'pink';
      circle1.innerHTML = '~ Breathe In ~';
    }, 1000), setTimeout(function() {
      circle2.style.background = 'pink';
      circle2.innerHTML = '~ Breathe In ~';
    }, 2000), setTimeout(function() {
      circle3.style.background = 'pink';
      circle3.innerHTML = '~ Breathe In ~';
    }, 3000), setTimeout(function() {
      circle4.style.background = 'pink';
      circle4.innerHTML = '~ Breathe In ~';
    }, 4000), setTimeout(function() {
      circle5.style.background = 'pink';
      circle5.innerHTML = '~ Breathe In ~';
    }, 5000), setTimeout(function() {
      circle5.style.background = 'cyan';
      circle5.innerHTML = '~ Breathe Out ~';
    }, 7000), setTimeout(function() {
      circle4.style.background = 'cyan';
      circle4.innerHTML = '~ Breathe Out ~';
    }, 8000), setTimeout(function() {
      circle3.style.background = 'cyan';
      circle3.innerHTML = '~ Breathe Out ~';
    }, 9000), setTimeout(function() {
      circle2.style.background = 'cyan';
      circle2.innerHTML = '~ Breathe Out ~';
    }, 10000), setTimeout(function() {
      circle1.style.background = 'cyan';
      circle1.innerHTML = '~ Breathe Out ~';
    }, 11000);

    // let message1 = document.createElement('p');
  // title.append(message1);
  // message1.innerHTML = '~Breathe In~';

  // let message2 = document.createElement('p');
  // title.append(message2);
  // message2.innerHTML = '~Breathe Out~'
    
};

let setMoving = setInterval(startMoving, totalTime);

function stopMoving() {
  clearInterval(setMoving);
  setMoving = setInterval(startMoving, totalTime);
};
