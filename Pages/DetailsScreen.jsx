import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Components
import VerticalScroll from "../Components/VerticalScroll";

const DetailsScreen = ({}) => {
  return (
    <VerticalScroll>
      <View style={styles.container}>
        <Text>Likes</Text>
      </View>
    </VerticalScroll>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 10,
  },
});
