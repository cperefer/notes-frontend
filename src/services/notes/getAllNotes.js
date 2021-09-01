import axios from "axios";
import { API_URL } from "../../config/config.js";

export const getAllNotes = () => {
  return axios.get(API_URL).then((response) => {
    const { data } = response;
    return data;
  });
};
