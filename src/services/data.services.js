import { PutRequest } from "../lib/Axios";

export const updateData = (id, data) => {
  return PutRequest(`api/users/${id}`, data);
};
