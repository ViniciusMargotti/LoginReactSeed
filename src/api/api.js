// utils/API.js

import axios from "axios";
import {history} from "../history";

let api = axios.create({
    baseURL: "http://localhost:8090",
    responseType: "json"
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response != null && error.response.status === 401) {
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = undefined;
        history.push('/login');
    }

    return Promise.reject(error.response.data);
});

export default api;
