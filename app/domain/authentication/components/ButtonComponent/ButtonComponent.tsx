import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { ButtonComponentStyles as style } from './ButtonComponentStyles'

const ButtonComponent = ({children,styles,onPress} : ButtonComponentProps) => {
  return (
    <TouchableOpacity style={[style.buttonContainer,styles]} onPress={onPress}>
      <Text style={style.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

export interface ButtonComponentProps {
  children : ReactNode,
  onPress? : (event : GestureResponderEvent) => void,
  styles? : any
}