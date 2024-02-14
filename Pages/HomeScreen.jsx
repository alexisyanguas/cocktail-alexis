import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";


// Components
import VerticalScroll from "../Components/VerticalScroll";

// Services
import productService from "../Services/cocktailService";
import Card from "../Components/Card";
const HomeScreen = ({
  navigation,
  likedCocktails = [],
  setLikedCocktails = () => {},
}) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const { getProducts } = productService;

  const fetchData = async () => {
    setIsLoading(true);
    let response = await getProducts();
    response.drinks = response.drinks.filter(
      (drink) =>
        !cocktails.some((cocktail) => cocktail.idDrink === drink.idDrink)
    );
    setCocktails([...cocktails, ...response.drinks]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <VerticalScroll fetchData={fetchData}>
      <View style={styles.container}>
        {cocktails.map((cocktail) => {
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
              onPress={() => {
                navigation.navigate("DetailsScreen", {
                  cocktail,
                  isLiked: isLikedCocktail(cocktail),
                  handleLike: () => handleLike(cocktail),
                });
              }}
            />
          );
        })}
        {/* <Button title="Get Cocktails" onPress={() => fetchData()} /> */}

        {isLoading && <ActivityIndicator size="large" color="#999999" />}
      </View>
    </VerticalScroll>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 10,
  },
});
