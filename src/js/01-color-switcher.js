function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;
const bodyDocument = document.querySelector('body');

const startButton = document.querySelector('[data-start]');
startButton.addEventListener('click', onStartButtonClick);

const stopButton = document.querySelector('[data-stop]');
stopButton.addEventListener('click', onStopButtonClick);

stopButton.disabled = true;

function onStartButtonClick() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(changesColors, 1000);
}

function onStopButtonClick() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
}

function changesColors() {
  bodyDocument.style.backgroundColor = getRandomHexColor();
}
