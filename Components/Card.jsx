import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import LikeButton from "./LikeButton";
const Card = ({
  name,
  img,
  ingredients = [],
  isLiked = false,
  handleLike,
  onPress,
}) => {
  return (
    <Pressable style={[styles.card_container]} onPress={onPress}>
      <Image
        style={[styles.image]}
        source={{ uri: img }}
        resizeMode="stretch"
      />
      <Info
        name={name}
        ingredients={ingredients}
        isLiked={isLiked}
        handleLike={handleLike}
      />
    </Pressable>
  );
};

const Info = ({ name, ingredients, isLiked, handleLike }) => (
  <View style={[styles.info_container]}>
    <View style={{ flexDirection: "column" }}>
      <Text style={[styles.card_text]}>{name}</Text>
      <Ingredients ingredients={ingredients} />
    </View>
    <LikeButton isLiked={isLiked} handleLike={handleLike} />
  </View>
);

const Ingredients = ({ ingredients }) => {
  const filteredIngredients = Object.values(ingredients).filter(
    (ingredient) => ingredient
  );
  return (
    <View style={styles.ingredients_container}>
      {Object.values(filteredIngredients).map((ingredient, index) => {
        const displayCount = 3;
        const count = Object.values(filteredIngredients).filter(
          (ingredient) => ingredient
        ).length;

        return index < displayCount ? (
          <Text key={index} style={[styles.ingredient]}>
            {ingredient}
          </Text>
        ) : index === displayCount ? (
          <Text key={index} style={[styles.ingredient]}>
            +{count - displayCount}
          </Text>
        ) : null;
      })}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    height: 250,
    width: "100%",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
  },
  info_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  card_text: {
    fontSize: 20,
  },

  ingredients_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    width: 200,
  },

  ingredient: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 5,
    borderRadius: 5,
  },
});
