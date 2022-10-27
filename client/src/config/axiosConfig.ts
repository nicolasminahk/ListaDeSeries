import axios from "axios";


const baseURL = process.env.REACT_APP_ENV == "prod" ? "https://series-platform.herokuapp.com" : "http://localhost:3001"

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})



