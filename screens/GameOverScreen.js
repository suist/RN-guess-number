import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>
          This Game is Over{""}
          <Text style={styles.resultText}>hi</Text>
          is this same?{""}
        </TitleText>
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
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>

        {/* it just pointer! not excute immediately! so dont use onRestart() */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
