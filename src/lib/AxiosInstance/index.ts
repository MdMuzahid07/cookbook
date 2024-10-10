import envConfig from "@/config/envConfig";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: envConfig.baseApi,
});

export default axiosInstance;