import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import SignUp from './src/screens/signUp';
import SignIn from './src/screens/signIn';



const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>     
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In", headerShown: false }}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Sign Up", headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});