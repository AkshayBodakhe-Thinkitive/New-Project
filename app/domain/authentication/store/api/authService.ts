import { post } from "../../../../config/axiosconfig/AxiosConfig";


export const login = async (email:string,password : string) => {
   console.log(email,password)
    try {
      const response = await post('api/auth/login',{email,password})
      return response;
    } catch (error) {
      throw error;
    }
}

export const forgotPassword = async (email: {email:string}) => {
  console.log(email)
  try {
    const response = await post('api/auth-module/forgot-password',{email})
    return response;
  } catch (error) {
    throw error;
  }
}