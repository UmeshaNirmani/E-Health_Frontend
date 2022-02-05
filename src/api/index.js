import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  // req.headers["x-access-token"] = `${
  //   JSON.parse(localStorage.getItem("userDetails")).token
  // }`;

  req.headers["Access-Control-Allow-Origin"] = "*";

  return req;
});
export const signIn = (formData) => API.post("/users/findAllUsers", formData);
