import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Logo } from "../../Assets";

const SplashScreen = () => {
  return (
    <View>
      <Logo />
      <View>
        <Text>Vaps</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
