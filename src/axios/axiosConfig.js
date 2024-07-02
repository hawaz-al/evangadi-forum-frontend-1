import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",

  baseURL: "https://evangadi-forum-backend-1-nwn0.onrender.com",

  // baseURL:"https://evangadi-backend-deploy-7.onrender.com",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
