import axios, { AxiosInstance } from 'axios';
import { getAccessToken } from '../../lib/auth/auth-token';

const BASE_URL = 'https://api.postideas.ru/api';

export const instanceLogged: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { Authorization: `Bearer ${getAccessToken()}` },
});

export const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
});
