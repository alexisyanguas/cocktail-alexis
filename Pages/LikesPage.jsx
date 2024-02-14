import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Components
import VerticalScroll from "../Components/VerticalScroll";
import Card from "../Components/Card";

const LikesPage = ({ likedCocktails = [], setLikedCocktails = () => {} }) => {
  const isLikedCocktail = (cocktail) => {
    return likedCocktails[cocktail.idDrink];
  };
  const handleLike = (cocktail) => {
    if (isLikedCocktail(cocktail)) removeLike(cocktail);
    else setLikedCocktails({ ...likedCocktails, [cocktail.idDrink]: cocktail });
  };
  const removeLike = (cocktail) => {
    setLikedCocktails((prevState) => {
      delete prevState[cocktail.idDrink];
      return { ...prevState };
    });
  };
  return (
    <VerticalScroll>
      <View style={styles.container}>
        {Object.values(likedCocktails).map((cocktail) => {
          return (
            <Card
              key={cocktail.idDrink}
              isLiked={isLikedCocktail(cocktail)}
              handleLike={() => handleLike(cocktail)}
              name={cocktail.strDrink}
              img={cocktail.strDrinkThumb}
              ingredients={[
                cocktail.strIngredient1,
                cocktail.strIngredient2,
                cocktail.strIngredient3,
                cocktail.strIngredient4,
                cocktail.strIngredient5,
                cocktail.strIngredient6,
                cocktail.strIngredient7,
                cocktail.strIngredient8,
                cocktail.strIngredient9,
                cocktail.strIngredient10,
                cocktail.strIngredient11,
                cocktail.strIngredient12,
                cocktail.strIngredient13,
                cocktail.strIngredient14,
                cocktail.strIngredient15,
              ]}
            />
          );
        })}
      </View>
    </VerticalScroll>
  );
};

export default LikesPage;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 10,
  },
});
