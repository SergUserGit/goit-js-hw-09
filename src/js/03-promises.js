const formElement = document.querySelector('.form');
formElement.addEventListener('submit', onFormSubmit);

const amountElement = document.querySelector('input[name="amount"]');
const firstDelayElement = document.querySelector('input[name="delay"]');
const DelayStepElement = document.querySelector('input[name="step"]');

function onFormSubmit(event) {
  event.preventDefault();

  const amountElementValue = Number(amountElement.value);
  const delayStepElementValue = Number(DelayStepElement.value);
  const firstStepElementValue = Number(firstDelayElement.value);

  let delaySum = 0;
  for (let i = 1; i <= amountElementValue; i += 1) {
    delaySum = firstStepElementValue + delayStepElementValue * (i - 1);
    createPromise(i, delaySum)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
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

//const fetchUserFromServer = username => {
//  return new Promise((resolve, reject) => {
//    console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
// Change value of isSuccess variable to simulate request status
//   const isSuccess = true;

//    if (isSuccess) {
//      resolve("success value");
//     } else {
//       reject("error");
//     }
//    }, 2000);
//  });
//};
