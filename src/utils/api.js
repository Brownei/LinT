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
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
        config.headers.Authorization = "Bearer " + getToken();
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
