import Axios from "axios";

export const getAxiosInstanceAuth = () => {
  return Axios.create({
    baseURL: "https://api.realworld.io/api/",
    headers: {
      //API_KEY
    },
  });
};

export const getAxiosInstanceApi = () => {
  return Axios.create({
    baseURL: "https://api.realworld.io/api/",
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
