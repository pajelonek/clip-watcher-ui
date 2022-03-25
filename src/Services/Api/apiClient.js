import axios from "axios";

const apiClient = axios.create({
    // Later read this URL from an environment variable
    baseURL: "http://localhost:8080"
});

export default apiClient;