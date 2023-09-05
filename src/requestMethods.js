import axios from 'axios';

export const BASE_URL = "https://shopping-card-backend.onrender.com/api";
//export const BASE_URL = 'http://localhost:3000/api';

const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
const currentUser = user && JSON.parse(user).currentUser;
export const username = currentUser?.username;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
