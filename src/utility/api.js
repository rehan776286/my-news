import axios from "axios";

const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000/api",
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE ||
    "https://test-news-backend-1.onrender.com/api",

  withCredentials: false, // set to true if backend needs cookies
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
