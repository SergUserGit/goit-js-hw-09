import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

let intervalId = null;

const dateTimePicker = document.querySelector('#datetime-picker');
const buttonDataStart = document.querySelector('[data-start]');

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

buttonDataStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      buttonDataStart.disabled = true;
      alert('Please choose a date in the future');
    } else {
      buttonDataStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

buttonDataStart.addEventListener('click', onDataStartButtonClick);

function onDataStartButtonClick() {
  intervalId = setInterval(showTime, 1000);
}

function addLeadingZero(value) {
  const strValue = String(value);
  return strValue.padStart(2, '0');
}

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

function getDateDifference() {
  const TimePicker = new Date(dateTimePicker.value);
  const currentDate = new Date(Date.now());
  const dateDifference = TimePicker - currentDate;
  return dateDifference;
}

function showTime() {
  const dateDifference = getDateDifference();
  const objectTime = convertMs(dateDifference);

  setDays(objectTime.days);
  setHours(objectTime.hours);
  setMinutes(objectTime.minutes);
  setSeconds(objectTime.seconds);

  if (
    objectTime.days === 0 &&
    objectTime.hours === 0 &&
    objectTime.minutes === 0 &&
    objectTime.seconds === 0
  ) {
    clearInterval(intervalId);
    return;
  }
}

function setDays(value) {
  daysElement.textContent = String(value);
}

function setHours(value) {
  hoursElement.textContent = addLeadingZero(value);
}

function setMinutes(value) {
  minutesElement.textContent = addLeadingZero(value);
}

function setSeconds(value) {
  secondsElement.textContent = addLeadingZero(value);
}
