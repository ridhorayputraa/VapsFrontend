import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap, Header, Select, TextInput } from "../../Components";

const SignUpAddress = () => {
  return (
    <View style={styles.page}>
      <Header title="Address" subTitle="Make sure it’s valid" onBack={true} />
      <View style={styles.container}>
        <TextInput label="Phone No." PlaceHolder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" PlaceHolder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." PlaceHolder="Type your house number" />
        <Gap height={16} />
        <Select />
        <TextInput label="City" PlaceHolder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 26,

    flex: 1,
  },
  photo: {
    alignItems: "center",
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: "#8d92a3",
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: "center",
    borderStyle: "dashed",
    justifyContent: "center",
  },
  photoContainer: {
    backgroundColor: "#F0F0F0",
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  addPhoto: {
    fontFamily: "Poppins-Light",
    color: "#8d92a3",
    fontSize: 14,
    textAlign: "center",
  },
});
