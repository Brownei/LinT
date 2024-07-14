import axios from "axios";

export const getToken = () => {
  if (typeof window !== "undefined") {
    // Client-side-only code
    return sessionStorage.getItem("session");
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
      // Request was cancelled due to timeout
      throw new Error("Request timed out");
    } else if (!error.response) {
      // Handle network errors
      // throw new Error("Network error: Please check your internet connection");
    } else return error;
    // throw error; // Re-throw other errors
  }
}

