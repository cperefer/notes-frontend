import axios from 'axios';
import config from '../config/config.js';

const url = `${config.BASE_URL}login`;

const login = async (credentials) => {
  const {data} = await axios.post(url, credentials);
  return data;
};

export default {
  login
};
