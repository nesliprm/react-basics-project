import { Box, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Hero } from "../components/Hero";
import { RecipeItemCard } from "../components/RecipeItemCard";
import { useState } from "react";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const recipes = data.hits.map((hit) => hit.recipe);
  const [userInput, setUserInput] = useState("");
  const searchedRecipes = recipes.filter(
    (recipe) =>
      recipe.label.toLowerCase().includes(userInput.toLowerCase()) ||
      recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(userInput.toLowerCase())
      )
  );

  return (
    <Box>
      <Hero userInput={userInput} setUserInput={setUserInput} />

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
        p={5}
        justifyItems="center"
      >
        {searchedRecipes.length > 0 ? (
          searchedRecipes.map((recipe) => (
            <RecipeItemCard
              recipe={recipe}
              key={recipe.uri}
              label={recipe.label}
              image={recipe.image}
              dietLabels={recipe.dietLabels}
              cautions={recipe.cautions}
              mealType={recipe.mealType}
              dishType={recipe.dishType}
              healthLabels={recipe.healthLabels}
              setSelectedRecipe={setSelectedRecipe}
            />
          ))
        ) : (
          <Box gridColumn="1 / -1" textAlign="center">
            No recipes found :(
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};
