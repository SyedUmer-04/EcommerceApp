import { Image, StyleSheet, View, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import { asset } from '../assets/asset';
import { vh, vw } from '../utils/measurements';
import { colors } from '../utils/theme';
import CustomText from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import Schema from '../components/schema';

function PasswordRecovery() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={asset.verificationBgImage}>
        <View style = {styles.topIconContainer}>
          <Image style={styles.lineIcon} source={asset.lineIcon} />
          <Image style={styles.logoIcon} source={asset.blackLogoIcon} />
        </View>

        <View style={styles.desc}>
            <CustomText
                textStyles={{
                fontSize: vh *3,
                fontWeight: '600',
                marginTop: vh*10,
                }}
            >
                Password Recovery
            </CustomText>
            <CustomText
            textStyles={{
                fontSize: vh*1.7,
                marginTop: '0.1%',
                marginHorizontal: '5%',

            }}>
                Enter your email to recarve a verification code for security & authentication.
            </CustomText>

            {/* <CustomText
            textStyles={{
                fontSize: vh*1.7,
                marginTop: '0.1%',
            }}>
                Welcome! Unlock Your Personlized Experience
            </CustomText> */}

            {/* <Formik
            initialValues={{
              email: '', 
              password: '' 
            }}

            validate={
              Schema.
            }> */}
                <CustomTextInput 
                  label={'Email Address'}
                  leftImageSource={asset.profileIcon}
                  placeholder={'Enter your email'}
                  placeholderColor={colors.LoginText}
                  key={'email'}
                />

            {/* </Formik> */}

            <CustomButton 
                buttonStyle = {{
                    width: '90%',
                    height: '10%',
                    margin: '5%',
                    
                }}
                buttonText={'Continue'}
                buttonTextStyles={{
                    color : colors.white, 
                    fontWeight: '900',
                    fontSize: vh*2.5,
                }}
            />

            <View style = {styles.bottomTextContainer}>
                <View style = {styles.line}>
                    
                </View>
            </View>

            <CustomText textStyles={{
                color: colors.darkText,
                marginTop: vh*2,
                flex: 1,
            }}
            >Back to 
                <CustomText textStyles={{
                    color: colors.Primary, }}
                > Login
                </CustomText>
            </CustomText>



        </View>
      </ImageBackground>
    </View>
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
    height: vh * 60,
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.loginBg,
    
  },

  logoIcon: {
    width: vw *50,
    resizeMode: 'contain',
    marginVertical: vh*2,
  },

  lineIcon: {
    width: vw * 40,
    resizeMode: 'contain',
    position: 'absolute',
    right: vh* 17,
    bottom: vh* 1.5,
    marginVertical: vh*2,
  },

  topIconContainer:{
    flexDirection: 'row',
    padding: 0,
    alignItems: 'flex-start'
  },

  desc: {
    flex: 1,
    backgroundColor: colors.loginBg,
    borderRadius: vw * 10,
    marginTop: '90%',
    width: '100%',
    alignItems: 'center',
  },

  bottomTextContainer:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  line:{
    height: vh/20,
    width: vw*15,
    backgroundColor: colors.darkText,
  },

  bottomIconContainer:{
    marginTop: vh*2,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  appIconBox:{
    width: vh*11,
    height: vh*6,
    backgroundColor: colors.white,
    borderRadius: vh*2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appIcon:{
    width: vh*3,
    height: vw*6,
    resizeMode: 'contain',
  }


});

export default PasswordRecovery;
