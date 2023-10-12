import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import AuthScreenContainer from '../../components/AuthScreenContainer/AuthScreenContainer';
import AuthHeaderText from '../../components/AuthHeaderText/AuthHeaderText';
import {AuthStrings} from '../../constants/StringConstants';
import AuthDescText from '../../components/AuthDescText/AuthDescText';
import TextInputBox from '../../components/TextInputBox/TextInputBox';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import Icon from 'react-native-vector-icons/Ionicons'
import { Icons } from '../../../../constants/IconNames';
import { colors } from '../../../../constants/Colors';
import { LOGIN_SCREEN, RESET_PASSWORD } from '../../../../navigation/constants/NavConstants';
import { isTablet } from '../../../../utils/DeviceInfo';
import { useAppDispatch } from '../../../../redux/store/configureStore';
import { forgotPasswordAction } from '../../store/async-actions/forgotPasswordAction';

const ForgotPasswordScreen = ({navigation} : any) => {

  const [email , setEmail] = useState('suraj.zurange@spicysoda.com')

    const dispatch = useAppDispatch()

    const navToLogin = () =>  navigation.navigate(LOGIN_SCREEN)

    const navToResetPassword = () => navigation.navigate(RESET_PASSWORD)


  return (
    <AuthScreenContainer>
      <View style={styles.container}>
        <AuthHeaderText>{AuthStrings.FORGOT_PASSWORD}</AuthHeaderText>
        <AuthDescText>{AuthStrings.WELCOME_PLEASE_ENTER_DETAILS}</AuthDescText>
        <View>
          <TextInputBox
            label={AuthStrings.ENTER_EMAIL}
            value={'suraj.zurange@spicysoda.com'}
            placeholder={AuthStrings.USERID_PLACEHOLDER}
            onChangeText={(email) => setEmail(email)}
          />
          <ButtonComponent onPress={()=>dispatch(forgotPasswordAction(email))}>{AuthStrings.SUBMIT}</ButtonComponent>
          <TouchableOpacity style={styles.loginNavigateContainer} onPress={navToLogin}>
             <Icon
              name={Icons.arrow_back}
              size={24}
              color={colors.primary_skyblue90}
             />
             <Text style={styles.loginNavigateText}>{AuthStrings.BACK_LOGIN}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreenContainer>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {
      width: isTablet ? 448 : '90%',
      },
    loginNavigateContainer : {
       flexDirection : 'row',
       alignSelf : 'center',
       alignItems : 'center',
       marginVertical : 18
    },
    loginNavigateText : {
        color : colors.primary_skyblue90,
        marginHorizontal : 10
    }
});
