import { getRequest } from "../lib/Axios";

export const getUser = (id) => {
  return getRequest(`api/users/${id}`);
};
