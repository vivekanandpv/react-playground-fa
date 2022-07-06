import axios from "axios";

export const restService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'X-Custom-Value': 'Vivek-value'
    }
});