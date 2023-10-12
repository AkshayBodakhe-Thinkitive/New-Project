import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {LoginScreenStyles as styles} from './LoginScreenStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthHeaderText from '../../components/AuthHeaderText/AuthHeaderText';
import {AuthStrings} from '../../constants/StringConstants';
import AuthScreenContainer from '../../components/AuthScreenContainer/AuthScreenContainer';
import AuthDescText from '../../components/AuthDescText/AuthDescText';
import TextInputBox from '../../components/TextInputBox/TextInputBox';
import {colors} from '../../../../constants/Colors';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import {Icons} from '../../../../constants/IconNames';
import { LoginScreenNavigationProp } from '../../interfaces/AuthInterface';
import { FORGOTPASS_SCREEN, MAIN } from '../../../../navigation/constants/NavConstants';
import { useSelectors } from '../../../../redux/selectors/Selectors';
import { RootState, useAppDispatch } from '../../../../redux/store/configureStore';
import { setLoginFormValues } from '../../store/reducers/AuthReducer';
import { useSelector } from 'react-redux';
import { loginAction } from '../../store/async-actions/loginAction';
import Loader from '../../../../common/components/Loader/Loader';



const LoginScreen = ({navigation} : LoginScreenNavigationProp) => {

  const dispatch = useAppDispatch()

  const {auth} = useSelectors()

  const [checkRemember , setCheckRemember] = useState(false)

  const checkRememberFun = () => {
    setCheckRemember(!checkRemember)
  }

  const navigateToForgotPass = () => navigation.navigate(FORGOTPASS_SCREEN)

  useEffect(()=>{
    navToHome()
  },[auth?.access_token])

    const navToHome = () => {
     if(auth.access_token !== '')
       navigation.replace(MAIN)
     }

  return (
    <AuthScreenContainer>
      <View style={styles.container}>
        <AuthHeaderText>{AuthStrings.LOG_IN_TO_YOUR_ACCOUNT}</AuthHeaderText>
        <AuthDescText>{AuthStrings.WELCOME_PLEASE_ENTER_DETAILS}</AuthDescText>
        <View style={styles.formContainer}>
          <TextInputBox
            value={'suraj.zurange@spicysoda.com'}
            label={AuthStrings.ENTER_USERID}
            placeholder={AuthStrings.USERID_PLACEHOLDER}
            onChangeText={(text)=>dispatch(setLoginFormValues({key:'email',value:text}))}
          />
          <TextInputBox
            label={AuthStrings.ENTER_PASS}
            value={'Kiran@12345'}
            placeholder={AuthStrings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            onChangeText={(text)=>dispatch(setLoginFormValues({key:'password',value:text}))}
          />
          <View style={styles.rowContainer}>
            <View style={styles.rememberMe}>
              <TouchableWithoutFeedback onPress={checkRememberFun}>
                <Icon
                  name={
                    checkRemember ? Icons.checkbox_marked : Icons.checkbox_blank
                  }
                  size={20}
                  color={colors.primary_skyblue80}
                />
              </TouchableWithoutFeedback>
              <Text style={styles.rememberMeText}>
                {AuthStrings.REMEMBER_ME}
              </Text>
            </View>
            <TouchableOpacity onPress={navigateToForgotPass}>
              <Text style={styles.forgotPassText}>
                {AuthStrings.FORGOT_PASS}
              </Text>
            </TouchableOpacity>
          </View>
          <ButtonComponent onPress={()=> dispatch(loginAction())}>{AuthStrings.LOG_IN}</ButtonComponent>
          <GoogleButton />
        </View>
      </View>
       {  
        auth.loading && <Loader/>
       }   
    </AuthScreenContainer>
  );
};

export default LoginScreen;


