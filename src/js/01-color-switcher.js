function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;
const bodyDocument = document.querySelector('body');

const StartButton = document.querySelector('[data-start]');
StartButton.addEventListener('click', onStartButtonClick);

const StopButton = document.querySelector('[data-stop]');
StopButton.addEventListener('click', onStopButtonClick);

StopButton.disabled = true;

function onStartButtonClick() {
  StartButton.disabled = true;
  StopButton.disabled = false;
  intervalId = setInterval(changesColors, 1000);
}

function onStopButtonClick() {
  StartButton.disabled = false;
  StopButton.disabled = true;
  clearInterval(intervalId);
}

function changesColors() {
  bodyDocument.style.backgroundColor = getRandomHexColor();
}
