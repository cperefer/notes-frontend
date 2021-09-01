import axios from "axios";
import { API_URL } from "../../config/config.js";

export const createNote = ({ content, userId }) => {
  return axios.post(API_URL, { content, userId }).then((response) => {
    const { data } = response;
    return data;
  });
};
