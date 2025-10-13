import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { asset } from '../assets/asset';
import { vh, vw } from '../utils/measurements';
import { colors } from '../utils/theme';

function Home(navigation) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
            <Image source={asset.navicon} style={styles.navicon}/>
            <Image source={asset.logoIcon} style={styles.headerLogo} />
        </View>

        <View style={styles.body}>

            <View style={styles.greetAndIcons}>
                <View>
                    <Text style={styles.greet}>welcome</Text>
                    <TouchableOpacity><Text style={styles.createAccount}>Create Account</Text></TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity><Image source={asset.homeSearch} style={styles.icons}/></TouchableOpacity>
                    <TouchableOpacity><Image source={asset.homeBag} style={styles.icons}/></TouchableOpacity>
                    <TouchableOpacity><Image source={asset.homefilter} style={styles.icons}/></TouchableOpacity>
                </View>
            </View>
            
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: vh * 1.5,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: vh * 1.5,
    paddingHorizontal: vw * 6,
  },

  headerLogo: {
    width: vw * 40,
    height: vh * 5,
    resizeMode: 'contain',
  },

  navicon: {
    width: vw * 7,
    height: vh * 4,
    resizeMode: 'contain',
    marginRight: vw * 20,
  },

  body: {
    flex: 1,
    backgroundColor: colors.Bg,
    paddingHorizontal: vw * 6,

  },

  greetAndIcons:{
    flexDirection: 'row',
    paddingVertical: vh * 2,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  greet: {
    color: colors.text
  },

  createAccount: {
    color: colors.text,
    fontSize: vw * 6,
    fontWeight: 600,
    
  },

  
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  icons: {
    height: vw * 5,
    width: vw * 5,
    resizeMode: 'contain', 
    margin: vw * 2,
  },


}); 

export default Home;
