/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/screens/Start';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import PasswordRecovery from './src/screens/PasswordRecovery';
import Verification from './src/screens/Verification';
import NewPassword from './src/screens/NewPassword';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Stack.Navigator
          initialRouteName={'Start'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
