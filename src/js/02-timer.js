// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const dateInputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;
const date = new Date();
console.log(date);

let result;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates);
        
        // console.log( Number(resalt));
    //     if ((date - selectedDates[0]) <= 0) {
    //       alert("Please choose a date in the future")
    //   }
        console.log(selectedDates[0]);
         result = selectedDates[0] - date
        console.log(result);
        if (result <= 0) {
            // alert('Please choose a date in the future')
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        } else {
            btnStart.disabled = false;
        }
        convertMs(result);
  console.log(convertMs(result));
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
let intervalID = null
function startTimer() {
    intervalID = setInterval(startTimerCount, 1000)
   btnStart.disabled =true
}
const startTimerCount = () => {
 const convTime = convertMs(result);
  days.textContent = String(convTime.days).padStart(2, '0');
  hours.textContent = String(convTime.hours).padStart(2, '0');
  minutes.textContent = String(convTime.minutes).padStart(2, '0');
  seconds.textContent = String(convTime.seconds).padStart(2, '0');
    result -= 1000;
     if (result < 0) {
         clearInterval(intervalID)
         btnStart.disabled = false
  }
    
}
// startTimer()


flatpickr(dateInputEl, options);
btnStart.addEventListener('click', startTimer)
const TIMER = document.querySelector('.timer')
TIMER.style.cssText = 'display: flex; justify-content: space-between;font-size: x-large; max-width: 800px;  margin-left: auto;  margin-right: auto'
    
