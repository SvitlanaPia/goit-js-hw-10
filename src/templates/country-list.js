export const createCountryList = countryInfo => {
  const countryArr = countryInfo.map(el => {
    return `
    <li class="country-list__item">
        <img class="country-list__icon" src="${el.flags.svg}" alt="country flag" width="30px"/>
        <p class="country-list__name">${el.name.official}</p>
    </li>`;
  });
  return countryArr.join('');
};

export const createCountryInfoCard = countryInfo => {
  const countryArr = countryInfo.map(el => {
    return `
            <div class="country-info__name">
                <img class="country-list__icon" src="${
                  el.flags.svg
                }" alt="country flag" width="40px"/>
                <h2 class="country-card-name">${el.name.official}</h2>
            </div>
            <ul class="country-description">
                <li class="country-description__iteam">
                    <p class="country-description__text">
                        <span class="country-description__text-title">Capital:</span>${
                          el.capital
                        }
                    </p>
                </li>
                <li class="country-description__team">
                    <p class="country-description__text">
                        <span class="country-description__text-title">Population:</span>${
                          el.population
                        }
                    </p>
                </li>
                <li class="country-description__iteam">
                    <p class="country-description__text">
                        <span class="country-description__text-title">Languages:</span>${Object.values(
                          el.languages
                        ).join(', ')}
                    </p>
                </li>
            </ul>
      
        `;
  });
  return countryArr.join('');
};
