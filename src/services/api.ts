import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL || "https://rickandmortyapi.com/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;