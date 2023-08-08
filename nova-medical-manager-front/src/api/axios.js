import axios from "axios";
import Cookies from "js-cookie";

// Crea una instancia de axios con la configuración de cookies
const axiosWithCookies = axios.create({
  baseURL: 'http://localhost:4000/api/',
  withCredentials: true,
});

// Agrega el interceptor para incluir el token en el encabezado de las solicitudes salientes
axiosWithCookies.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosWithCookies;