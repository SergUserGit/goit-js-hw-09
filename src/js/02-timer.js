import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const buttonDataStart = document.querySelector('[data-start]');

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
