import './css/styles.css';
import { RestcountriesAPI } from './fetchCountries';
import {
  createCountryList,
  createCountryInfoCard,
} from './templates/country-list';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const restcountriesApi = new RestcountriesAPI();

function searchCountryByQuery(event) {
  const country = event.target.value.trim();

  if (!country) {
    clearCountries();
    return;
  } else {
    restcountriesApi
      .fetchCountries(country)
      .then(data => {
        if (data.length > 10) {
          listEl.innerHTML = '';
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (data.length >= 2 && data.length <= 10) {
          listEl.innerHTML = createCountryList(data);
          countryInfoEl.innerHTML = '';
        } else {
          listEl.innerHTML = '';
          countryInfoEl.innerHTML = createCountryInfoCard(data);
        }
      })
      .catch(err => {
        Notify.failure('Oops, there is no country with that name');
        clearCountries();
      });
  }
}
function clearCountries() {
  listEl.innerHTML = '';
  countryInfoEl.innerHTML = '';
}

inputEl.addEventListener(
  'input',
  debounce(searchCountryByQuery, DEBOUNCE_DELAY)
);
