import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
});

const formElement = document.querySelector('.form');
formElement.addEventListener('submit', onFormSubmit);

const amountElement = document.querySelector('input[name="amount"]');
const firstDelayElement = document.querySelector('input[name="delay"]');
const delayStepElement = document.querySelector('input[name="step"]');

function onFormSubmit(event) {
  event.preventDefault();

  const amountElementValue = Number(amountElement.value);
  const delayStepElementValue = Number(delayStepElement.value);
  const firstStepElementValue = Number(firstDelayElement.value);

  let delaySum = 0;
  for (let i = 1; i <= amountElementValue; i += 1) {
    delaySum = firstStepElementValue + delayStepElementValue * (i - 1);
    createPromise(i, delaySum)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
