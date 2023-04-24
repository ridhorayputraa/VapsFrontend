import { StyleSheet, Text, TextInput as TextInputRN, View } from "react-native";
import React from "react";

type TextInputType = {
  label: string;
  PlaceHolder: string;
};

const TextInput = ({ label, PlaceHolder }: TextInputType) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={PlaceHolder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: "#020202",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontFamily: "Poppins-Light",
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#020202",
  },
});
