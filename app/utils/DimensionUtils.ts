import { Dimensions } from 'react-native';
import { isLandscape } from 'react-native-device-info';


export const screenWidth = Dimensions.get('window').width;


export const screenHeight = Dimensions.get('window').height;

export const getDeviceOrientation = () => {
    const { width, height } = Dimensions.get('window');
    return width < height ? 'portrait' : 'landscape';
  };
  
  