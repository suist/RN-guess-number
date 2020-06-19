import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...prop} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    borderBottomColor: "#a1a39b",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
