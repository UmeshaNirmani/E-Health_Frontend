import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  // req.headers["x-access-token"] = `${
  //   JSON.parse(localStorage.getItem("userDetails")).token
  // }`;

  req.headers["Access-Control-Allow-Origin"] = "*";

  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);

// food table
export const fetchRecordsAll = () => API.post("/foodtable/fetch");

export const createRecords = (formData) =>
  API.post("/foodtable/create", formData);
export const updateRecords = (formData) =>
  API.post("/foodtable/update", formData);
export const deleteRecords = (formData) =>
  API.post("/foodtable/deleteById", formData);
