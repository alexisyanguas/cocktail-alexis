import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, useTheme } from "react-native-paper";

import HomeScreen from "./Pages/HomeScreen";
import DetailsScreen from "./Pages/DetailsScreen";
import LikesPage from "./Pages/LikesPage";

const Tab = createBottomTabNavigator();

export default function App() {
  const [likedCocktails, setLikedCocktails] = useState({});

  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";

  const tabBarOptions = {
    tabBarLabel: "",
    tabBarColor: "#FFF",
    tabBarActiveTintColor: "#FF8484",
  };

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Home"
          children={({ navigation }) => (
            <HomeScreen
              navigation={navigation}
              likedCocktails={likedCocktails}
              setLikedCocktails={setLikedCocktails}
            />
          )}
          options={{
            ...tabBarOptions,
            tabBarAccessibilityLabel: "Home",
            tabBarIcon: ({ color, focused }) => {
              return (
                <View style={{ position: "relative" }}>
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                  {focused && (
                    <MaterialCommunityIcons
                      name="minus"
                      color={color}
                      size={26}
                      style={styles.minus_icon}
                    />
                  )}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Likes"
          children={() => (
            <LikesPage
              likedCocktails={likedCocktails}
              setLikedCocktails={setLikedCocktails}
            />
          )}
          options={{
            ...tabBarOptions,
            tabBarAccessibilityLabel: "Likes",

            tabBarIcon: ({ color, focused }) => (
              <View style={{ position: "relative" }}>
                <MaterialCommunityIcons
                  name={"heart"}
                  color={color}
                  size={26}
                />
                {focused && (
                  <MaterialCommunityIcons
                    name="minus"
                    color={color}
                    size={26}
                    style={styles.minus_icon}
                  />
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  minus_icon: {
    position: "absolute",
    bottom: -15,
    zIndex: 1,
  },
});
