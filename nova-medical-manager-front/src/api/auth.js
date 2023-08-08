import axios from "./axios";

export const registerRequest = user => axios.post('/register', user); // usar las llamadas del back no en español

export const loginRequest = user => axios.post('/login', user);

export const verifyTokenRequest = axios.get('/verify');

export const addContactRequest = contact => axios.post('/contacts', contact); // Nueva función para agregar contactos

