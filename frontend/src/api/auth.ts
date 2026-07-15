import axios from "axios";

export const API = axios.create({
 baseURL: "http://localhost:5000/api/v1",
});

export const loginUser = (data: any) => API.post("/auth/login", data);

export const registerUser = (data: any) =>
  API.post("/auth/register", data);

export const getMe = (token: string) =>
  API.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });