import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SignIn, SplashScreen } from "./Pages";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router/Router";

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
