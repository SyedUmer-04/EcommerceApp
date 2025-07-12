import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { asset } from '../assets/assets';
import { vh, vw } from '../measurements';
import { colors } from '../utils/theme';
import CustomText from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { Schema } from '../components/schema';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ImageBackground style={styles.bgImage} source={asset.LoginBg}>
          <View style={styles.topIconContainer}>
            <Image style={styles.lineIcon} source={asset.lineIcon} />
            <Image style={styles.logoIcon} source={asset.blackLogoIcon} />
          </View>

          <View style={styles.desc}>
            <CustomText
              textStyles={{
                fontSize: vh * 3,
                fontWeight: 'bold',
                marginTop: vh * 10,
              }}
            >
              Login Your Account
            </CustomText>
            <CustomText
              textStyles={{
                fontSize: vh * 1.7,
                marginTop: '0.1%',
              }}
            >
              Welcome! Unlock Your Personlized Experience
            </CustomText>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Schema.LoginSchema}
              onSubmit={() => console.log('submitted')}
            >
              {({ handleChange, errors, values, handleSubmit }) => (
                <>
                  <CustomTextInput
                    label={'Email Address'}
                    leftImageSource={asset.profileIcon}
                    placeholder={'Enter your email'}
                    placeholderColor={colors.LoginText}
                    key={'email'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    isrequired={true}
                    error={errors.email}
                    onSubmitEditing={() => passwordRef.current.focus()}
                  />

                  {errors.email && (
                    <CustomText textStyles={{ color: colors.red, alignSelf: 'flex-start'}} >
                      {errors.email}
                    </CustomText>
                  )}

                  <CustomTextInput
                    label={'Password'}
                    placeholder={'Enter your password'}
                    placeholderColor={colors.LoginText}
                    leftImageSource={asset.lockIcon}
                    rightImageSource={asset.eyeIcon}
                    key={'password'}
                    secureText={true}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    isrequired={true}
                    error={errors.password}
                  />
                  {errors.password && (
                    <CustomText textStyles={{ color: colors.red, alignSelf: 'flex-start'}}>
                      {errors.password}
                    </CustomText>
                  )}

                  <TouchableOpacity style= {{alignSelf:'flex-end',}} onPress={() => navigation.navigate('PasswordRecovery')}>
                    <CustomText textStyles={{color:colors.red}}>Forgot password?</CustomText>
                  </TouchableOpacity>

                  <CustomButton
                    buttonStyle={{
                      width: '100%',
                      height: vh*6,
                      marginVertical: '5%',
                    }}
                    buttonText={'Login'}
                    buttonTextStyles={{
                      color: colors.white,
                      fontWeight: '900',
                      fontSize: vh * 2.5,
                    }}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
            <View style={styles.bottomTextContainer}>
              <View style={styles.line}></View>

              <CustomText
                textStyles={{
                  color: colors.shadow,
                  marginHorizontal: vh*2,
                }}
              >
                Or Continue With
              </CustomText>

              <View style={styles.line}></View>
            </View>
            <View style={styles.bottomIconContainer}>
              <CustomButton
                buttonImgStyle={styles.appIcon}
                imgSrc={asset.googleIcon}
                buttonStyle={styles.appIconBox}
              />
              <CustomButton
                buttonImgStyle={styles.appIcon}
                imgSrc={asset.appleIcon}
                buttonStyle={styles.appIconBox}
              />
              <CustomButton
                buttonImgStyle={styles.appIcon}
                imgSrc={asset.facebookIcon}
                buttonStyle={styles.appIconBox}
              />
            </View>
            <CustomText
              textStyles={{
                color: colors.darkText,
                marginTop: vh * 2,
                flex: 1,
              }}
            >
              Don't have an account? 
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <CustomText
                  textStyles={{
                    color: colors.Primary,
                  }}
                >
                  {' '}Sign Up
                </CustomText>
              </TouchableOpacity>
            </CustomText>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgImage: {
    flex: 1,
    width: vw * 100,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.loginBg,
  },

  logoIcon: {
    width: vw * 50,
    resizeMode: 'contain',
    marginVertical: vh * 2,
  },

  lineIcon: {
    width: vw * 40,
    resizeMode: 'contain',
    position: 'absolute',
    right: vh * 17,
    bottom: vh * 1.5,
    marginVertical: vh * 2,
  },

  topIconContainer: {
    flexDirection: 'row',
    padding: 0,
    alignItems: 'flex-start',
  },

  desc: {
    flex: 1,
    backgroundColor: colors.loginBg,
    borderRadius: vw * 10,
    marginTop: '40%',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '5%'
  },

  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  line: {
    height: vh / 20,
    width: vw * 15,
    backgroundColor: colors.darkText,
  },

  bottomIconContainer: {
    marginTop: vh * 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  appIconBox: {
    width: vh*12,
    height: vh * 6,
    backgroundColor: colors.white,
    borderRadius: vh * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appIcon: {
    width: vh * 3,
    height: vw * 6,
    resizeMode: 'contain',
  },
});

export default Login;
