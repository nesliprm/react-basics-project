import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
    <Box>
      {!selectedRecipe ? (
        <RecipeListPage setSelectedRecipe={setSelectedRecipe} />
      ) : (
        <RecipeItemPage
          item={selectedRecipe}
          setSelectedItem={setSelectedRecipe}
        />
      )}
    </Box>
  );
};
