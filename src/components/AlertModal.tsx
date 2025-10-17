import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import { vh, vw } from '../utils/measurements';
import { colors } from '../utils/theme';
import { asset } from '../assets/asset';

function AlertModal({
  imgSource,
  line1,
  line2,
  navigateToScreen,
  navigation
}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.alertBox}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={asset.close} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
        <Image source={imgSource} style={styles.image} />

        <CustomText textStyles={styles.text}>{line1}</CustomText>
        <CustomText textStyles={styles.text}>{line2}</CustomText>

        <CustomButton
          text="OK"
          onPress={() => {
            navigation.navigate(navigateToScreen);
          }}
          buttonStyle={styles.button}
          buttonText='Login'
          buttonTextStyles={styles.buttonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: vw * 100,
    height: vh * 100,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  alertBox: {
    height: vh * 50,
    width: vw * 100,
    paddingVertical : vh * 2.5,
    alignItems: 'center',
    backgroundColor: colors.Bg,
  },

  closeButtonContainer: {
    width: vw * 100,
    alignItems: 'flex-end',
    marginBottom: vh * 2,
  },

  closeButton:{
    width: vw * 4,
    height: vh * 2.5,
    marginRight: vw * 5,
    resizeMode: 'contain',
  },

  image: {
    width: vw * 25,
    height: vw * 25,
    marginBottom: vh * 3,
  },

  text: {
    fontSize: vw * 5,
    fontWeight: '600',
    color: colors.text,
  },

  button: {
    width: vw * 60,
    height: vh * 6,
    marginTop: vh * 4,
    backgroundColor: colors.button,
  },

  buttonText: {
    fontSize: vw * 4,
    color: colors.white,
    fontWeight: '600',
  },
});

export default AlertModal;
