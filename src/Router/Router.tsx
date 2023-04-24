// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, SplashScreen } from "../Pages";
import SignUp from "../Pages/SignUp/SignUp";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Router;
