import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Formik } from 'formik';
import { asset } from '../assets/assets';
import { vh, vw } from '../measurements';
import { colors } from '../utils/theme';
import CustomText from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Schema } from '../components/schema';

function SignUp() {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigation = useNavigation();

  return (
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
              fontWeight: '600',
              marginTop: vh * 10,
            }}
          >
            Create Account
          </CustomText>

          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={Schema.SignUpSchema}
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
                  isrequired={true}
                  error={errors.email}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onSubmitEditing={() => passwordRef.current.focus()}
                />
                ({errors.email} &&
                <CustomText
                  textStyles={{ color: colors.red, alignSelf: 'flex-start' }}
                >
                  {errors.email}
                </CustomText>
                )
                <CustomTextInput
                  label={'Password'}
                  placeholder={'Enter your password'}
                  placeholderColor={colors.LoginText}
                  leftImageSource={asset.lockIcon}
                  rightImageSource={asset.eyeIcon}
                  key={'password'}
                  isrequired={true}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  error={errors.password}
                  ref={passwordRef}
                  onSubmitEditing={() => confirmPasswordRef.current.focus()}
                />
                ({errors.password} &&{' '}
                <CustomText
                  textStyles={{ color: colors.red, alignSelf: 'flex-start' }}
                >
                  {errors.password}
                </CustomText>
                )
                <CustomTextInput
                  label={'Confirm Password'}
                  placeholder={'Confirm your password'}
                  placeholderColor={colors.LoginText}
                  leftImageSource={asset.lockIcon}
                  rightImageSource={asset.eyeIcon}
                  key={'confirmPassword'}
                  isrequired={true}
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  ref={confirmPasswordRef}
                />
                ({errors.confirmPassword} &&{' '}
                <CustomText
                  textStyles={{ color: colors.red, alignSelf: 'flex-start' }}
                >
                  {errors.confirmPassword}
                </CustomText>
                )
                <CustomButton
                  buttonStyle={{
                    width: '100%',
                    height: '10%',
                    margin: '5%',
                  }}
                  buttonText={'Sign Up'}
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
          </View>
          <CustomText
            textStyles={{
              color: colors.darkText,
              marginTop: vh * 2,
              flex: 1,
            }}
          >
            Already have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <CustomText
                textStyles={{
                  color: colors.Primary,
                }}
              >
                Login
              </CustomText>
            </TouchableOpacity>
          </CustomText>
        </View>
      </ImageBackground>
    </ScrollView>
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
    resizeMode: 'stretch',
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
    marginTop: vh * 10,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },

  bottomTextContainer: {
    // width: '90%',
    backgroundColor: 'red',
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
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  appIconBox: {
    width: vh * 11,
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

export default SignUp;
