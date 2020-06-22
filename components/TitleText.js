import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  <Text>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
  },
});

export default TitleText;
