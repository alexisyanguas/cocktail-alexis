import axios from "redaxios";

const getProducts = async (data = null) => {
  const options = {
    method: "GET",
    url: "https://the-cocktail-db.p.rapidapi.com/randomselection.php",
    params: {},
    headers: {
      "X-RapidAPI-Key": "40bcbffeebmsh6c6201eace655a1p19fb92jsn295f4e32fd9b",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const productService = {
  getProducts,
};

export default productService;
