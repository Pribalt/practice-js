const linkEl = document.querySelector('#link');
const textEl = document.querySelector('#text');

linkEl.addEventListener('mouseover', onMauseOver);
linkEl.addEventListener('mouseout', onMauseOut);

function onMauseOver() {
  changeStrongColor('blue');
}

function onMauseOut() {
  changeStrongColor('black');
}

function changeStrongColor(color) {
  const list = textEl.querySelectorAll('strong');
  list.forEach(element => (element.style.color = color));
}
