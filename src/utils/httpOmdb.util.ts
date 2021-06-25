import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

const KEY = '7b835e75';

const HttpOmdb = axios.create(
    {
        baseURL: 'https://www.omdbapi.com/'
    }
)

const requestInterceptor = (request: AxiosRequestConfig): AxiosRequestConfig => {
    request.url = `${request.url}${request.url?.includes('?')? '&' : '?'}apikey=${KEY}`
    return request;
}

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
    let responseProcessed = response.data.data ?? response.data ?? response;
    return responseProcessed;
}

const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

HttpOmdb.interceptors.request.use(requestInterceptor);
HttpOmdb.interceptors.response.use(responseInterceptor, errorInterceptor);

export default HttpOmdb;