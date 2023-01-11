const formEl = document.querySelector('.js-weather');
const listEl = document.querySelector('.js-list');

formEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const {
    query: { value: query },
    days: { value: days },
  } = e.currentTarget.elements;

  if (!query) {
    return alert('add value');
  }

  weatherAPI(query, days)
    .then(
      data => (listEl.innerHTML = createMarkup(data.forecast.forecastday))
      //  listEl.insertAdjacentHTML(
      //    'beforeend',
      //    createMarkup(data.forecast.forecastday)
      //  )
    )
    .catch((listEl.innerHTML = createErrorMarkup()));
}

function weatherAPI(query, days) {
  const BUSE_URL = 'http://api.weatherapi.com/v1/forecast.json';
  const APY_KEY = '94a040c94bab4dcabf9130808222712';
  return fetch(`${BUSE_URL}?key=${APY_KEY}&q=${query}&days=${days}`).then(
    resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    }
  );
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        day: {
          condition: { icon, text },
          avgtemp_c,
        },
        date,
      }) =>
        `<li>
  <img src="${icon}" alt="${text}" />
  <h3>${text}</h3>
  <h2>Date ${date}</h2>
  <h4>Temperature ${avgtemp_c}</h4>
</li>`
    )
    .join('');
}

function createErrorMarkup() {
  return `<li><img src="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=1400" alt="Bad request" /></li>`;
}
