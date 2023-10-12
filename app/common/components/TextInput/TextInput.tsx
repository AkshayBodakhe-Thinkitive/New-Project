import { StyleSheet, Text, TextInput as RnTextInput, View, ViewStyle, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInputStyles as styles} from './TextInputStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../constants/Colors';


const TextInput = ({label,placeholder,onChangeText,secureTextEntry,rightIcon,style}:TextInputProps) => {
    const [showPass, setShowPass] = useState(true);
    const [text, setText] = useState('');
  
    const onChangeTxt = (val: string) => {
      onChangeText && onChangeText(val);
      setText(val);
    };
  return (
    <View style={[styles.container,style]}>
     { label && <Text style={styles.labelStyles}>{label}</Text>}
      <View style={styles.inputContainer}>
        <RnTextInput
          style={[styles.inputBox]}
          placeholder={placeholder}
          placeholderTextColor={colors.grey60}
          onChangeText={onChangeTxt}
          secureTextEntry={secureTextEntry ? showPass : false}
        />
        {rightIcon && rightIcon}
      </View>
      {secureTextEntry === true && text.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            setShowPass(!showPass);
          }}
          style={styles.eye}
          >
          <Icon name={showPass ? 'eye-off' : 'eye'} color={colors.primary_skyblue100} size={24} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default TextInput



export interface TextInputProps {
    label? : string,
    placeholder? : string,
    onChangeText?:  (text : string ) => void,
    secureTextEntry? : boolean,
    rightIcon? : any,
    style? : ViewStyle
   }
   
   