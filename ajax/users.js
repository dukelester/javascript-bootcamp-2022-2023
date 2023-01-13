const axios = require('axios');

async function getUsers() {
  const res = await axios.get('https://private-anon-6270f7eccc-hackorsnoozeapi.apiary-mock.com/users');
  console.log(res.data);
}
getUsers();
