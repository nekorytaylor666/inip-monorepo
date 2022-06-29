import axios from "axios";

export const api = axios.create({
    baseURL: "http://68.183.74.222:3001",
});
