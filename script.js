const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const minutes1 =document.getElementById('minutes');
const seconds1 = document.getElementById('seconds');


const newyears = '1 Jan 2023'

function countdown() {
    const newYearsDate = new Date(newyears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) /1000;


    const days = Math.floor( totalSeconds/ 3600/ 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log( days, hours, minutes, seconds);

    days1.innerHTML = days;
    hours1.innerHTML = formatTime(hours);
    minutes1.innerHTML = formatTime(minutes);
    seconds1.innerHTML = formatTime(seconds);

}

function formatTime(time) {
   return time <10 ? `0${time}`: time;
}

countdown();


setInterval(countdown, 1000);
