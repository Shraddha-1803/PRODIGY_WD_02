// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;

// const display = document.getElementById('display');
// const startBtn = document.getElementById('startBtn');
// const stopBtn = document.getElementById('stopBtn');
// const resetBtn = document.getElementById('resetBtn');
// const lapBtn = document.getElementById('lapBtn');
// const lapsContainer = document.getElementById('laps');

// function timeToString(time) {
//     let diffInHrs = time / 3600000;
//     let hh = Math.floor(diffInHrs);

//     let diffInMin = (diffInHrs - hh) * 60;
//     let mm = Math.floor(diffInMin);

//     let diffInSec = (diffInMin - mm) * 60;
//     let ss = Math.floor(diffInSec);

//     let diffInMs = (diffInSec - ss) * 100;
//     let ms = Math.floor(diffInMs);

//     let formattedMM = mm.toString().padStart(2, '0');
//     let formattedSS = ss.toString().padStart(2, '0');
//     let formattedMS = ms.toString().padStart(2, '0');

//     return `${formattedMM}:${formattedSS}:${formattedMS}`;
// }

// function print(txt) {
//     display.innerHTML = txt;
// }

// function start() {
//     startTime = Date.now() - elapsedTime;
//     timerInterval = setInterval(() => {
//         elapsedTime = Date.now() - startTime;
//         print(timeToString(elapsedTime));
//     }, 10);
//     startBtn.style.display = 'none';
//     stopBtn.style.display = 'inline-block';
// }

// function stop() {
//     clearInterval(timerInterval);
//     startBtn.style.display = 'inline-block';
//     stopBtn.style.display = 'none';
// }

// function reset() {
//     clearInterval(timerInterval);
//     print('00:00:00');
//     elapsedTime = 0;
//     startBtn.style.display = 'inline-block';
//     stopBtn.style.display = 'none';
//     lapsContainer.innerHTML = '';
// }

// function lap() {
//     const lapTime = timeToString(elapsedTime);
//     const lapElement = document.createElement('div');
//     lapElement.innerText = lapTime;
//     lapElement.className = 'lap';
//     lapsContainer.appendChild(lapElement);
// }

// startBtn.addEventListener('click', start);
// stopBtn.addEventListener('click', stop);
// resetBtn.addEventListener('click', reset);
// lapBtn.addEventListener('click', lap);



// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;

// const display = document.getElementById('display');
// const startBtn = document.getElementById('startBtn');
// const stopBtn = document.getElementById('stopBtn');
// const resetBtn = document.getElementById('resetBtn');
// const lapBtn = document.getElementById('lapBtn');
// const clearLapsBtn = document.getElementById('clearLapsBtn');
// const lapsContainer = document.getElementById('laps');

// function timeToString(time) {
//     let diffInHrs = time / 3600000;
//     let hh = Math.floor(diffInHrs);

//     let diffInMin = (diffInHrs - hh) * 60;
//     let mm = Math.floor(diffInMin);

//     let diffInSec = (diffInMin - mm) * 60;
//     let ss = Math.floor(diffInSec);

//     let diffInMs = (diffInSec - ss) * 100;
//     let ms = Math.floor(diffInMs);

//     let formattedMM = mm.toString().padStart(2, '0');
//     let formattedSS = ss.toString().padStart(2, '0');
//     let formattedMS = ms.toString().padStart(2, '0');

//     return `${formattedMM}:${formattedSS}:${formattedMS}`;
// }

// function print(txt) {
//     display.innerHTML = txt;
// }

// function start() {
//     startTime = Date.now() - elapsedTime;

//     timerInterval = setInterval(() => {
//         elapsedTime = Date.now() - startTime;
//         print(timeToString(elapsedTime));
//     }, 10);

//     startBtn.style.display = 'none';
//     stopBtn.style.display = 'inline-block';
// }

// function stop() {
//     clearInterval(timerInterval);
//     startBtn.style.display = 'inline-block';
//     stopBtn.style.display = 'none';
// }

// function reset() {
//     clearInterval(timerInterval);
//     elapsedTime = 0;
//     print('00:00:00');

//     startBtn.style.display = 'inline-block';
//     stopBtn.style.display = 'none';

//     lapsContainer.innerHTML = '';
// }

// function lap() {
//     if (elapsedTime === 0) return;

//     const lapTime = timeToString(elapsedTime);
//     const lapElement = document.createElement('div');

//     lapElement.className = 'lap';
//     lapElement.innerText = lapTime;

//     lapsContainer.appendChild(lapElement);
// }

// function clearLaps() {
//     lapsContainer.innerHTML = '';
// }

// startBtn.addEventListener('click', start);
// stopBtn.addEventListener('click', stop);
// resetBtn.addEventListener('click', reset);
// lapBtn.addEventListener('click', lap);
// clearLapsBtn.addEventListener('click', clearLaps);




// script.js
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCounter = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const clearLapsBtn = document.getElementById('clearLapsBtn');
const lapsContainer = document.getElementById('laps');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);

    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
}

function stop() {
    clearInterval(timerInterval);
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapCounter = 0;

    print('00:00:00');
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
    lapsContainer.innerHTML = '';
}

function lap() {
    if (elapsedTime === 0) return;

    lapCounter++;

    const lapTime = timeToString(elapsedTime);
    const lapElement = document.createElement('div');

    lapElement.className = 'lap';
    lapElement.innerHTML = `
        <span>Lap ${lapCounter}</span>
        <span>${lapTime}</span>
    `;

    // newest lap goes on top
    lapsContainer.prepend(lapElement);
}

function clearLaps() {
    lapsContainer.innerHTML = '';
    lapCounter = 0;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
clearLapsBtn.addEventListener('click', clearLaps);