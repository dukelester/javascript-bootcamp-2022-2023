const axios = require('axios');

console.log('welcome to the star wars api');

const apiURL = 'https://swapi.dev/api/planets/';
const fetchData = async function () {
  const response = await axios.get(apiURL);
  const { results, count, next } = response.data;
  console.log(results, count, next);
  results.forEach((planet) => {
    console.log(`Planet name ===> ${planet.name} ====> 'Rotation Period ${planet.rotation_period}
    Planet diameter ${planet.diameter} ==> Planet Gravity ${planet.gravity}
    Planet climate ===> ${planet.climate} ==> Planet population ${planet.population}
    `);
  });
  const nextResponse = await axios(next);
  const { results: nextResults, count: nextCount, next: nextNext } = nextResponse.data;
  console.log(nextResults, nextCount, nextNext);
  nextResults.forEach((planet) => {
    console.log(`Planet name ===> ${planet.name} ====> 'Rotation Period ${planet.rotation_period}
    Planet diameter ${planet.diameter} ==> Planet Gravity ${planet.gravity}
    Planet climate ===> ${planet.climate} ==> Planet population ${planet.population}
    `);
  });
};

fetchData();
