import axios from "axios";
import{BASE_URL} from "../utils/constant"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    header:{
        "Content-type":"application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = localStorage.getItem("token");
        if(accessToken){
            config.header.Authorization = accessToken;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
);

export default axiosInstance;