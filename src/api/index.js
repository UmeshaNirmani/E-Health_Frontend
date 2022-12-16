import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  // req.headers["Access-Control-Allow-Origin"] = "*";
  if (localStorage.getItem("userProfile")) {
    req.headers["Authorization"] = `${
      "Bearer " + JSON.parse(localStorage.getItem("userProfile")).accessToken
    }`;
  }
  //console.log("headers:", req.headers);
  return req;
});

// user
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const profileUpdate = (formData) => API.post("/user/update", formData);
export const fetchAllUsers = () => API.post("/user/fetch");
export const fetchUserProfile = () => API.post("/user/profile");

// food table
export const fetchRecordsAll = () => API.post("/foodtable/fetch");
export const createRecords = (formData) =>
  API.post("/foodtable/create", formData);
export const updateRecords = (formData) =>
  API.post("/foodtable/update", formData);
export const deleteRecords = (formData) =>
  API.post("/foodtable/delete", formData);

// for calorie calculator
export const fetchAllFoods = () => API.post("/user/caloriecalculator");

// for food Diary
export const foodDiaryInputs = (formData) =>
  API.post("/fooddiary/create", formData);
export const fetchFoodDiary = (searchData) =>
  API.post("/fooddiary/fetch", searchData);

// for medical history
export const medicalHistoryCreate = (formData) =>
  API.post("/medicalhistory/create", formData);
export const medicalHistoryFetch = () => API.post("/medicalhistory/");

// for graphs
export const fetchGraphData = (formData) =>
  API.post("/fooddiary/fetchByTimeRange", formData);

// for profile
// export const fetchProfile = () => API.post("/profile/");

// for patient-doctor chat
export const fetchChat = () => API.post("/chat/");
export const chatCreate = (formData) => API.post("/chat/create", formData);
