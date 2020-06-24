import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? "#b5eaff" : "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {},
  headerAndroid: {},
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
