import {  getAxiosInstanceAuth } from "./api";

export const loginApi = (user, callback) => {
  getAxiosInstanceAuth()
    .post("users/login", user)
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};
export const registerApi = (user, callback) => {
  getAxiosInstanceAuth()
    .post("users", user)
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};

