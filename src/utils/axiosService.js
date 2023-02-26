import axios from "axios";

import {urls} from "../api";



export const axiosService = axios.create({baseURL: 'https://api.themoviedb.org/3'})

axiosService.interceptors.request.use((config) => {

        config.headers.Authorization = urls.token
        return config
    }
)