import envConfig from "@/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";


const axiosInstance = axios.create({
    baseURL: envConfig.baseApi,
});

export default axiosInstance;


axiosInstance.interceptors.request.use(
    function (config) {
        const cookieStore = cookies();
        const accessToken = cookieStore.get("accessToken")?.value;

        if (accessToken) {
            config.headers.Authorization = accessToken;
        }

        return config;

    },
    function (error) {
        return Promise.reject(error);
    }
);