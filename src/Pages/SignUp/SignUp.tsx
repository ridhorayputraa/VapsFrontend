import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap, Header, TextInput } from "../../Components";

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subTitle="Register and Vapss" onBack={true} />
      <View style={styles.container}>
        {/* Photo Container */}
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        {/* EndOf Container */}
        <TextInput label="Full Name" PlaceHolder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          PlaceHolder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" PlaceHolder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

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
