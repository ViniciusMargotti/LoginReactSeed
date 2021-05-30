// utils/API.js

import axios from "axios";
import {createBrowserHistory as router} from "history";

let api = axios.create({
    baseURL: "http://localhost:8090",
    responseType: "json"
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response != null && error.response.status === 401) {
        router.push({ // here is the redirect component OR USE window.location.href='/login'
            path: '/login',
            name: 'login'
        })
    }

    return Promise.reject(error.response.data);
});

export default api;
