import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL: process.env.baseUrl || "https://travellinknepal.onvirotech.com",

});
export default axiosBaseURL;
export const baseUrl = process.env.baseUrl || "https://travellinknepal.onvirotech.com";

// export const baseUrl = process.env.baseUrl || "http://192.168.1.3:8000";