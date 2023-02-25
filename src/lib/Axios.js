import axios from "axios";
import { BASE_URL } from "../constants/env.constants";

export const PostRequest = async (url, data) => {
  return await axios.post(`${BASE_URL + url}`, data);
};

export const PutRequest = async (url, data) => {
  return await axios.put(`${BASE_URL + url}`, data);
};

export const getRequest = async (url) => {
  return await axios.get(`${BASE_URL + url}`);
};
