import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {Icons} from '../../../../constants/IconNames';
import {colors} from '../../../../constants/Colors';
import {screenHeight} from '../../../../utils/DimensionUtils';
import {FontType} from '../../../../constants/FontType';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({title}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.customHeader}>
      <TouchableOpacity style={{marginLeft: 10}} onPress={()=>navigation.goBack()}>
        <Icon name={Icons.arrow_back} size={22} />
      </TouchableOpacity>
      <Text style={styles.customHeaderText}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  customHeader: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    flexDirection: 'row',
    // borderWidth: 1,
    alignItems: 'center',
    height: screenHeight * 0.06,
    // elevation: 4,
    shadowOpacity: 0.2,
  },
  customHeaderText: {
    fontFamily: FontType.figtree_semibold,
    fontSize: 22,
    marginLeft: 10,
  },
});
