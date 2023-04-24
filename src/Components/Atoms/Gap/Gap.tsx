import { View, Text } from "react-native";
import React from "react";

type GapTYpes = {
  width?: string | number;
  height?: string | number;
};

const Gap = ({ width, height }: GapTYpes) => {
  return <View style={{ width: width, height: height }} />;
};

export default Gap;
