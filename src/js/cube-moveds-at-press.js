const cubeEl = document.querySelector('.cube');
const step = 10;

document.addEventListener('keydown', onMoveCube);

function onMoveCube(e) {
  console.log(e);
  const left = parseInt(cubeEl.style.left);
  const top = parseInt(cubeEl.style.top);

  if (e.code === 'ArrowRight') {
    cubeEl.style.left = `${left + step}px`;
  } else if (e.code === 'ArrowLeft') {
    cubeEl.style.left = `${left - step}px`;
  } else if (e.code === 'ArrowDown') {
    cubeEl.style.top = `${top + step}px`;
  } else if (e.code === 'ArrowUp') {
    cubeEl.style.top = `${top - step}px`;
  }
}
