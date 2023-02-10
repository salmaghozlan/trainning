const axios = require('axios');

const updatedUser = {
  id: 1,
  email: 'ross@gmail.com',
  password: 'm38rmF$',
};

axios.put(`https://fakestoreapi.com/users/${updatedUser.id}`, updatedUser)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
