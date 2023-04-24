import {
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

type ButtonTypes = {
  onPress?: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const Button = ({
  onPress,
  text,
  color = "#79BAFC",
  textColor = "#020202",
}: ButtonTypes) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={[styles.textColor, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,

    // Mengubah definisi style container menjadi sebuah objek yang memiliki properti ViewStyle
  },
  textColor: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "center",
  },
});
