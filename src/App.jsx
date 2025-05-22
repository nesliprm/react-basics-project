import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Footer } from "./components/Footer";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box className="App">
      {!selectedRecipe ? (
        <RecipeListPage setSelectedRecipe={setSelectedRecipe} />
      ) : (
        <RecipeItemPage
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}
      <Footer />
    </Box>
  );
};
