const tableEl = document.querySelector('.board');
const activeTdEl = document.querySelector('.active');
const randomColor = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];

tableEl.addEventListener('click', onTableClick);
activeTdEl.addEventListener('click', onTdClick);

function onTableClick(e) {
  const randomIndex = getRandomInt(randomColor.length);

  if (e.target.tagName !== 'TD') {
    return;
  }
  e.target.style.background = randomColor[randomIndex];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function onTdClick(e) {
  e.stopPropagation();
  console.log('TdClick');
  e.target.style.background = 'red';
}
