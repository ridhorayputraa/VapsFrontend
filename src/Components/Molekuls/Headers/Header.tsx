import { StyleSheet, Text, View } from "react-native";
import React from "react";

type typeHeader = {
  title: string;
  subTitle: string;
};

const Header = ({ title, subTitle }: typeHeader) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.SubTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    color: "#020202",
  },
  SubTitle: {
    color: "#8D92A3",
    fontSize: 14,
    fontFamily: "Poppins-Light",
  },
});
