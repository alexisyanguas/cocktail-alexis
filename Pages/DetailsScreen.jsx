import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// Components
import VerticalScroll from "../Components/VerticalScroll";

const DetailsScreen = ({ route, navigation }) => {
  const { cocktail, isLiked, handleLike } = route.params;

  const ingredients = [
    { name: cocktail.strIngredient1, measure: cocktail.strMeasure1 },
    { name: cocktail.strIngredient2, measure: cocktail.strMeasure2 },
    { name: cocktail.strIngredient3, measure: cocktail.strMeasure3 },
    { name: cocktail.strIngredient4, measure: cocktail.strMeasure4 },
    { name: cocktail.strIngredient5, measure: cocktail.strMeasure5 },
    { name: cocktail.strIngredient6, measure: cocktail.strMeasure6 },
    { name: cocktail.strIngredient7, measure: cocktail.strMeasure7 },
    { name: cocktail.strIngredient8, measure: cocktail.strMeasure8 },
    { name: cocktail.strIngredient9, measure: cocktail.strMeasure9 },
    { name: cocktail.strIngredient10, measure: cocktail.strMeasure10 },
    { name: cocktail.strIngredient11, measure: cocktail.strMeasure11 },
    { name: cocktail.strIngredient12, measure: cocktail.strMeasure12 },
    { name: cocktail.strIngredient13, measure: cocktail.strMeasure13 },
    { name: cocktail.strIngredient14, measure: cocktail.strMeasure14 },
    { name: cocktail.strIngredient15, measure: cocktail.strMeasure15 },
  ];
  const instructions = cocktail.strInstructions.split(".");
  return (
    <VerticalScroll>
      <View style={[styles.card_container]}>
        <Image
          style={[styles.image]}
          resizeMode="stretch"
          source={{ uri: cocktail.strDrinkThumb }}
        />
        <Info
          ingredients={ingredients}
          name={cocktail.strDrink}
          instructions={instructions}
        />
      </View>
    </VerticalScroll>
  );
};

const Info = ({ ingredients, name, instructions }) => {
  console.log(ingredients);
  return (
    <View style={[styles.info_container]}>
      <Text style={[styles.card_text]}>{name}</Text>
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </View>
  );
};

const Instructions = ({ instructions }) => {
  return (
    <View>
      <Text style={[styles.card_text]}>Instructions</Text>
      {instructions.map((instruction, index) => {
        return (
          <Text key={index} style={[styles.ingredient]}>
            {instruction}
          </Text>
        );
      })}
    </View>
  );
};

const Ingredients = ({ ingredients }) => {
  const filteredIngredients = Object.values(ingredients).filter(
    (ingredient) => ingredient.name
  );
  return (
    <View style={styles.ingredients_container}>
      {Object.values(filteredIngredients).map((ingredient, index) => {
        console.log(ingredient);
        return (
          <Text key={index} style={[styles.ingredient]}>
            • {ingredient.name} - {ingredient.measure}
          </Text>
        );
      })}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  info_container: {
    width: "100%",
    gap: 10,
    padding: 10,
  },

  card_text: {
    fontSize: 20,
  },

  ingredients_container: {
    gap: 5,
  },

  ingredient: {
    color: "#000",
    padding: 5,
    borderRadius: 5,
  },
});
