import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

let intervalId = null;

const dateTimePicker = document.querySelector('#datetime-picker');
const buttonDataStart = document.querySelector('[data-start]');

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

buttonDataStart.disabled = true;

Notiflix.Notify.init({
  width: '280px',
  position: 'left-top',
  distance: '200px',
  opacity: 1,
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setTime(0, 0, 0, 0);
    if (selectedDates[0] <= Date.now()) {
      buttonDataStart.disabled = true;
      clearInterval(intervalId);
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonDataStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

buttonDataStart.addEventListener('click', onDataStartButtonClick);

function onDataStartButtonClick() {
  clearInterval(intervalId);

  buttonDataStart.disabled = true;
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
  const timePicker = new Date(dateTimePicker.value);
  const currentDate = new Date(Date.now());
  const dateDifference = timePicker - currentDate;
  return dateDifference;
}

function showTime() {
  const dateDifference = getDateDifference();
  const objectTime = convertMs(dateDifference);

  setTime(
    objectTime.days,
    objectTime.hours,
    objectTime.minutes,
    objectTime.seconds
  );

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
  daysElement.textContent = addLeadingZero(value);
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

function setTime(days, hours, minutes, seconds) {
  setDays(days);
  setHours(hours);
  setMinutes(minutes);
  setSeconds(seconds);
}
