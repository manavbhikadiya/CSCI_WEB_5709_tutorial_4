import axios from "axios";

const BASE_URL = "https://express-t4.onrender.com";

// export const Login = (data) => axios.post(`${BASE_URL}/api/login`, data);
export const GetUsers = () => axios.get(`${BASE_URL}/api/users`);
export const GetUserProfile = (params) =>
  axios.get(`${BASE_URL}/api/users/${params}`);

export const Login = (data) =>
  fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Replace with your actual data
  });
