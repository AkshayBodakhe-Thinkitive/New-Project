import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthScreenContainer from '../../components/AuthScreenContainer/AuthScreenContainer'
import AuthHeaderText from '../../components/AuthHeaderText/AuthHeaderText'
import { AuthStrings } from '../../constants/StringConstants'
import AuthDescText from '../../components/AuthDescText/AuthDescText'
import TextInputBox from '../../components/TextInputBox/TextInputBox'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { LOGIN_SCREEN } from '../../../../navigation/constants/NavConstants'
import { isTablet } from '../../../../utils/DeviceInfo'

const ResetPasswordScreen = ({navigation} : any) => {

    const navToLogin = () =>  navigation.navigate(LOGIN_SCREEN)
  return (
    <AuthScreenContainer>
       <View style={styles.container}>
          <AuthHeaderText>{AuthStrings.NEW_PASSWORD}</AuthHeaderText>
          <AuthDescText>{AuthStrings.WELCOME_PLEASE_ENTER_DETAILS}</AuthDescText>
          <View>
          <TextInputBox
            label={AuthStrings.ENTER_NEW_PASS}
            placeholder={AuthStrings.PASSWORD_PLACEHOLDER}
            onChangeText={() => {}}
            secureTextEntry={true}
          />
           <TextInputBox
            label={AuthStrings.ENTER_CONFIRM_PASS}
            placeholder={AuthStrings.PASSWORD_PLACEHOLDER}
            onChangeText={() => {}}
            secureTextEntry={true}
          />
           <ButtonComponent onPress={navToLogin}>{AuthStrings.SUBMIT}</ButtonComponent>
          </View>
       </View>
    </AuthScreenContainer>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
     container: {
      width: isTablet ? 448 : '90%',
      
      },
})