const axios = require('axios');

axios.get('https://fakestoreapi.com/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
