export class RestcountriesAPI {
  static BASE_URL = 'https://restcountries.com';

  fetchCountries(name) {
    const searchParams = new URLSearchParams({
      fields: ['name', 'capital', 'population', 'flags', 'languages'],
    });
    return fetch(
      `${RestcountriesAPI.BASE_URL}/v3.1/name/${name}?${searchParams}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
