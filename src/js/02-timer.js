import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const qs = q => document.querySelector(q);
const btnStart = qs('[data-start]');
const btnStop = qs('[data-stop]');
const days = qs('[data-days]');
const hours = qs('[data-hours]');
const minutes = qs('[data-minutes]');
const seconds = qs('[data-seconds]');
const initDate = qs('#date-selector');

console.log(btnStart);
console.log(btnStop);
btnStart.disabled = true;
btnStop.disabled = true;
let idTime = null;
let selectData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let nowData = new Date();
    console.log(selectedDates[0]);

    if (selectedDates[0] <= nowData) {
      Notiflix.Notify.failure('Please choose a date in the future"');
    } else {
      selectData = selectedDates[0];
      btnStart.disabled = false;
      console.log(selectData);
    }
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

const addZeroValue = val => {
  return val.toString().padStart(2, '0');
};
const countdown = () => {
  Notiflix.Notify.success('Start Countdown! :)')
  idTime = setInterval(() => {
    let timeMiliSecond = selectData.getTime() - new Date().getTime();
    btnStart.disabled = true;
    btnStop.disabled = false;
    days.innerText = addZeroValue(convertMs(timeMiliSecond).days);
    hours.innerText = addZeroValue(convertMs(timeMiliSecond).hours);
    minutes.innerText = addZeroValue(convertMs(timeMiliSecond).minutes);
    seconds.innerText = addZeroValue(convertMs(timeMiliSecond).seconds);
    
    if (
      convertMs(timeMiliSecond).days === 0 &&
      convertMs(timeMiliSecond).hours === 0 &&
      convertMs(timeMiliSecond).minutes === 0 &&
      convertMs(timeMiliSecond).seconds === 0
    ) {
      clearInterval(idTime);
    }
  }, 1000);
};
const fail = () => {
  clearInterval(idTime);
  btnStart.disabled = false
Notiflix.Notify.failure('Stop Countdown! :)');
}
btnStart.addEventListener('click', countdown);
btnStop.addEventListener('click', fail);

flatpickr(initDate, options);
