import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackParamList = {
    ForgotPassword: undefined;
    Main : undefined
};

export type LoginScreenNavigationProp = {
    navigation: NativeStackNavigationProp<StackParamList, 'ForgotPassword'>;
}

export interface IAuth {
    isLoggedIn: boolean,
    loginFormValues : {
        email : string,
        password : string,
    },
    access_token : string,
    loading : boolean,
    forgotPass : {
        email : string
    },

}