import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SplashScreen } from "./Pages";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
