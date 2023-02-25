import { getRequest } from "../../../lib/Axios";

export const getUsers = () => {
  return getRequest("api/users");
};
