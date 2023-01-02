const fetch  = require('node-fetch')

const fetchUsers = () => {
    fetch('https://reqres.in/api/users')
    .then((response) => console.log(response.json()))
    .then((data) => console.log(data));

}
fetchUsers()
