import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

function Navigation({ children }) {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      {currentUser ? (
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Navigation;
