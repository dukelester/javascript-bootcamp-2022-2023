// Tha ajax => Axios
const axios = require('axios');
// axios.defaults.baseURL = '';
const options = {
  method: 'GET',
  url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-movers',
  params: { id: 'nky:ind', template: 'INDEX' },
  headers: {
    'X-RapidAPI-Key': 'd83b192c26msh8241cee75c92e29p1e2498jsn896302b9c3d1',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com',
  },
};

// const marketData = axios.request(options)
//   .then((response) => response.data)
//   .catch((error) => console.log(error.message));

// console.log(marketData);

const getMarketData = () => {
  try {
    axios.request(options)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(error);
  }
};

getMarketData();

const getData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data, response.status, response.statusText);
    console.log(response.headers, response.config);
  } catch (error) {
    console.log(error);
  }
};

getData();

// How to perform POST requests with Axios
axios.post('/users/', {
  fullname: 'duke lester',
  occupation: 'Software Engineer',
  salary: 'USD 6,000',
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.message));

// Send a POST request
axios({
  method: 'post',
  url: 'users/data',
  data: {
    fullName: 'lester dlester',
    email: 'lester45@gmail.com',
    location: 'juja kiambu',
    address: 'Oasis',
  },

}).then((response) => console.log(response))
  .catch((error) => console.log(error));

// Get request
axios({
  method: 'get',
  url: 'https://dukelester.com',
  responseType: 'stream',
}).then((response) => response.data)
  .catch((error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.headers);
      console.log(error.response.status);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error, ', error.message);
      console.log(error.toJSON());
    }
  });
