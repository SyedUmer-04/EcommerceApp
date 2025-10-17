import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../utils/theme';
import { asset } from '../assets/asset';
import { vh, vw } from '../utils/measurements';
import React, { useEffect } from 'react';

function Start({navigation}: any) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('GetStarted'); // or 'navigate'  to GetStarted
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <View style={styles.start}>
      <Image style={styles.image} source={asset.logoIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  start: {
    flex: 1,
    backgroundColor: colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: vw * 70,
    resizeMode: 'contain',
  },
});

export default Start;
