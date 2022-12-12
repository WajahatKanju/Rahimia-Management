import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup"

const Stack = createNativeStackNavigator();


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
