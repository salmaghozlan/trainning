const axios = require('axios');

const newUser = {
  email: 'John@gmail.com',
  password: 'm38rmF$',
};

axios
  .post('https://fakestoreapi.com/users', newUser)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
