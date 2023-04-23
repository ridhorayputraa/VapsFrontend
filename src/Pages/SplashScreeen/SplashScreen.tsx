import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Logo } from "../../Assets";

const SplashScreen = () => {
  return (
    <View style={styles.wraper}>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.text}>Vaps</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wraper: {
    backgroundColor: "#79BAFC",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 30,
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 32,
    color: "#020202",
  },
});
