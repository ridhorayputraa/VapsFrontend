import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap, Header, TextInput } from "../../Components";

const SignIn = ({navigation}:any) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          PlaceHolder="Type your email address"
          label="Email Address"
        />
        <Gap height={16} />
        <TextInput PlaceHolder="Type your password" label="Password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button

        onPress={() => navigation.navigate('signUp')}
        text="Create New Account" textColor="#ffffff" color="#8D92A3" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: "white",
    flex: 1,
  },
});
