import axios from 'axios';

const client = axios.create({
  baseURL: "https://young-mountain-91908.herokuapp.com/api",
});

const api = {
  loadHouses() {
    return client.get('/houses').then(response => response.data);
  }, 
};

export default api;
