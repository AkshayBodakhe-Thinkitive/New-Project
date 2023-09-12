import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL : 'https://api.example.com',
    headers: {
      'Content-Type': 'application/json',
      
    },
    timeout: 16000,
  });

const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance.get(url, config).then(({data}) => data);

const post = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance.post(url, data, config).then(res => {
    return res.data;
  });

const put = <D, R>(url: string,data?: D, config?: AxiosRequestConfig): Promise<R> => 
instance.put(url, data, config).then(({data}) => data);

const _delete = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance.delete(url, config).then(({data}) => data);

const patch = <D, R>(url: string,data?: D,config?: AxiosRequestConfig): Promise<R> => 
instance.patch(url, data, config).then(({data}) => data);

export {get, put, post, _delete, patch, instance};