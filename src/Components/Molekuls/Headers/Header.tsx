import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { IcBack } from "../../../Assets";

type typeHeader = {
  title: string;
  subTitle: string;
  onBack?: boolean;
};

const Header = ({ title, subTitle, onBack }: typeHeader) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
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
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
