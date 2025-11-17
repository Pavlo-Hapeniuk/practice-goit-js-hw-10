import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

// ===============================

const refs = {
  datetimeInputEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
};
console.log(refs);
// ===============================
refs.startBtnEl.addEventListener('click', () => {
  console.log('Start');
});
// ===============================
