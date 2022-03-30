import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import tela1 from './screens/tela1';
import tela2 from './screens/tela2';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tela1" component={tela1} />
      <Stack.Screen name="tela2" component={tela2} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
