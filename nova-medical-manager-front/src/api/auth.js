import axios from "axios";

const API = 'http://localhost:4000/api';

export const registerRequest = user => axios.post(`${API}/register`, user); // usar las llamadas del back no en español

export const loginRequest = user => axios.post(`${API}/login`, user); 