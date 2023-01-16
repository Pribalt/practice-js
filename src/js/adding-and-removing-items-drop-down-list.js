const colorSelectEl = document.querySelector('#colorSelect');
const removeBtnEl = document.querySelector('#removeOption');
const inputEl = document.querySelector('#add');
const addBtnEl = document.querySelector('#addOption');

removeBtnEl.addEventListener('click', onRemoveOption);
addBtnEl.addEventListener('click', onAddOption);

function onRemoveOption() {
  console.dir(colorSelectEl);
  colorSelectEl.selectedOptions[0].remove();
}

function onAddOption() {
  const value = inputEl.value.trim();

  if (value === '') {
    return;
  }

  const option = `<option>${value}</option>`;
  colorSelectEl.insertAdjacentHTML('beforeend', option);
  inputEl.value = '';
}
