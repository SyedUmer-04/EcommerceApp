import {
  Image,
  StyleSheet,
  TextInput,
  View,
  ImageURISource,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../utils/theme';
import { vh, vw } from '../utils/measurements';
import CustomText from './CustomText';
import { maxWorkers } from '../../metro.config';
import { asset } from '../assets/asset';
import { useState } from 'react';

interface textInputI {
  leftImageSource?: ImageURISource;
  rightImageSource?: ImageURISource;
  label?: String;
  placeholder: String;
  placeholderColor?: String;
  isrequired?: Boolean;
  inputStyle?: ViewStyle;
  secureText?: Boolean;
}

const CustomTextInput = props => {
  const [isHidden, setIsHidden] = useState(() => !!rightImageSource)
  const {
    leftImageSource,
    rightImageSource,
    label,
    placeholder,
    placeholderColor = colors.LoginText,
    isrequired,
    inputStyle,
  } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <CustomText textStyles={{ fontSize: vh * 2, marginVertical: vh }}>
          {label}
        </CustomText>
        {isrequired &&
          (props.error ? (
            <CustomText textStyles={{ fontSize: vh * 3, color: colors.red }}>
              *
            </CustomText>
          ) : (
            <CustomText textStyles={{ fontSize: vh * 3 }}>*</CustomText>
          ))}
      </View>
      <View style={styles.inputContainer}>
        {leftImageSource && (
          <Image style={styles.image} source={leftImageSource} />
        )}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          cursorColor={colors.LoginText}
          secureTextEntry={isHidden}
          {...props}
        />
        {rightImageSource && (
          <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
            <Image style={styles.image} source={rightImageSource} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '2%',
    width: '100%',
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: vw,
    shadowColor: colors.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    color: colors.LoginText,
  },

  image: {
    margin: vh,
    height: vh * 2.5,
    width: vw * 5,
    resizeMode: 'contain',
  },
});

export default CustomTextInput;
