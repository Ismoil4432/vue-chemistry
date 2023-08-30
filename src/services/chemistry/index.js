import axios from "../axios";

export const chemistryService = {
  login: (data) => axios.post(`/api/token/`, data),

  postData: (data, token) =>
    axios.post(`/app1/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
