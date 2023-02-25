import { PostRequest } from "../../../lib/Axios";

export const signin = (data) => {
  return PostRequest("api/auth/login", data);
};

export const signup = (data) => {
  return PostRequest("api/auth/register", data);
};
