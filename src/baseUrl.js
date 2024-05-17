import Axios from 'axios';
const axiosBaseURL = Axios.create({
    // baseURL: process.env.baseUrl || "https://nepaltravellink.onvirotech.net/",
    baseURL: process.env.baseUrl || "http://192.168.254.2:8000/",

});
export default axiosBaseURL;
// export const baseUrl = process.env.baseUrl || "https://nepaltravellink.onvirotech.net/";
export const baseUrl = process.env.baseUrl || "http://192.168.254.2:8000/";

// export const baseUrl = process.env.baseUrl || "http://192.168.1.3:8000";