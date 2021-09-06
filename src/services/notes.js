import axios from "axios";
import config from "../config/config.js";

const url = `${config.BASE_URL}notes`;

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
}

const getAll = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
}

const create = (newNote) => {
  const config = {
    headers: {
      Authorization: token,
    }
  };
  const request = axios.post(url, newNote, config);  
  return request.then((response) => response.data);
}

const update = (id, newNote) => {
  const request = axios.put(`${url}/${id}`, newNote);
  return request.then((response) => response.data);
}

export default {
  getAll,
  create,
  update,
  setToken,
}