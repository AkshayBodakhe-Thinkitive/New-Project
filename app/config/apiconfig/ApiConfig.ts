import { instance } from "../axiosconfig/AxiosConfig";


instance.interceptors.request.use(
    async (config) => {
        try {
         config.headers.Authorization = `Bearer token`
        } catch (error) {
            
        }
        return config;
    },
    async (error) => {
        return Promise.reject(error);
    }
)


instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );