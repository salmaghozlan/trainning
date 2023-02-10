const axios = require('axios');

const userId = 1;

axios.delete(`https://fakestoreapi.com/users/${userId}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
