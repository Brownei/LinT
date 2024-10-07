import axios from "axios";
import { setSessionExpired } from "../hooks/use-session-store";
import { errorToast } from "./toast";

export const getToken = () => {
  if (typeof window !== "undefined") {
    // Client-side-only code
    const unParsedToken = sessionStorage.getItem("lint_session");
    return JSON.parse(unParsedToken)
  } else {
    return "";
  }
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      config.headers.Authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Response interceptor to handle specific status codes
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        setSessionExpired(true);
      }
    } else if (error.request) {
      if (typeof window !== "undefined" && !navigator.onLine) {
        console.log("Root", error);
      }
    }

    return Promise.reject(error);
  }
);

export async function getUserProfile() {
  const { data } = await api.get(`/auth/user`)
  return data.userInfo
}

export async function usingAnotherBearerRequest(token, method, url) {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await api({
      method: method,
      url,
      headers: {
        Authorization: 'Bearer' + token
      },
      signal
    })

    return response;
  } catch (error) {
    if (error.code === "ECONNABORTED" || error.message === "canceled") {
      throw new Error("Request timed out");
    } else if (!error.response) {
    } else return error;
    // throw error; // Re-throw other errors
  }
}

