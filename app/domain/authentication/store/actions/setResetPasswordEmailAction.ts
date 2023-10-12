import { IAuth } from "../../interfaces/AuthInterface"

export const setResetPasswordEmailAction  = (state : IAuth | any,action : any) => {
    console.log( state.forgotPass.email, action.payload)
    state.forgotPass.email = action.payload
}