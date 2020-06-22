import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This Game is Over</Text>
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
});

export default GameOverScreen;
