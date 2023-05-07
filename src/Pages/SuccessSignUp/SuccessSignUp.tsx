import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IlustrationSUcces } from "../../Assets";
import { Button, Gap } from "../../Components";

const SuccessSignUp = () => {
  return (
    <View style={styles.page}>
      <IlustrationSUcces />
      <Gap height={31} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.SubTitle}>Now you are able to order</Text>
      <Text style={styles.SubTitle}>some products as a self-reward</Text>
      <View style={styles.buttonContainer}>
        <Gap height={30} />
        <Button text="Find Vapss" />
      </View>
    </View>
  );
};

export default SuccessSignUp;
// All Testing done
const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#020202",
  },
  SubTitle: {
    fontFamily: "Poppins-Light",
    fontSize: 14,
    color: "#8d92a3",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 80,
  },
});
