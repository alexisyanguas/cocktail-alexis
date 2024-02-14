import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const VerticalScroll = ({ children, fetchData = () => {} }) => {
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentSizeHeight = event.nativeEvent.contentSize.height;
    const layoutMeasurementHeight = event.nativeEvent.layoutMeasurement.height;

    // Si la position de défilement + la hauteur de la vue est égale à la hauteur du contenu,
    // cela signifie que l'utilisateur a atteint le bas de la liste
    if (offsetY + layoutMeasurementHeight >= contentSizeHeight - 100) {
      // Appeler fetchData() lorsque l'utilisateur atteint le bas
      fetchData();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} onScrollEndDrag={handleScroll}>
        <View style={styles.view}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerticalScroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE6C9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    padding: 20,
    paddingTop: 0,
  },
  view: {
    flex: 1,
    paddingBottom: 20,
  },
});
