import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, { useState } from 'react';
import { TextInputBoxStyles as styles} from './TextInputBoxStyles';
import { colors } from '../../../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const TextInputBox = ({label,value,placeholder,onChangeText,secureTextEntry,rightIcon,rightMaterialIcon,style}:TextInputBoxProps) => {

  const [showPass, setShowPass] = useState(true);
  const [text, setText] = useState('');

  const onChangeTxt = (val: string) => {
    onChangeText && onChangeText(val);
    setText(val);
  };

  return (
    <View style={[styles.container,style]}>
     <Text style={styles.labelStyles}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.grey60}
          onChangeText={onChangeTxt}
          secureTextEntry={secureTextEntry ? showPass : false}
        />
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
      {
       rightIcon && <View style={styles.icon}>
        <Icon name={rightIcon} color={colors.grey70} style={{fontSize:responsiveFontSize(1)}}/>
       </View>
      }
      {
       rightMaterialIcon && <View style={styles.icon} >
        <MaterialIcon name={rightMaterialIcon} color={colors.grey70}  style={{fontSize:responsiveFontSize(1)}} />
       </View>
      }
    </View>
  );
};

export default TextInputBox;

export interface TextInputBoxProps {
 label? : string,
 value? : any,
 placeholder? : string,
 onChangeText?:  (text : string ) => void,
 secureTextEntry? : boolean,
 rightIcon? : string,
 rightMaterialIcon? : string
 style? : ViewStyle
}


