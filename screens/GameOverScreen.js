import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>This Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //   source={require("../assets/original.png")}
          source={{
            uri:
              "https://image.freepik.com/free-vector/international-day-yoga-illustration-paper-style_23-2148560838.jpg",
          }}
          style={styles.image}
        />
      </View>

      <Text>Number of rounds : {props.roundsNumber}</Text>
      <Text>Number was :{props.userNumber}</Text>
      <Button title="NEW Game" onPress={props.onRestart} />
      {/* it just pointer! not excute immediately! so dont use onRestart() */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
