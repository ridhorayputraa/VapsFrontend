import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SignIn, SplashScreen } from "./Pages";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
