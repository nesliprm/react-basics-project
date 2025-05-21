import { Box, SimpleGrid, Center, Button } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Hero } from "../components/Hero";
import { RecipeItemCard } from "../components/RecipeItemCard";
import { FilterTags } from "../components/FilterTags";
import { useState } from "react";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const recipes = data.hits.map((hit) => hit.recipe);
  const [userInput, setUserInput] = useState("");
  const [filter, setFilter] = useState("");
  const displayedRecipes = recipes.filter((recipe) => {
    const matchesName = recipe.label
      .toLowerCase()
      .includes(userInput.toLowerCase());
    const matchesHealth = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(userInput.toLowerCase())
    );
    const matchesFilter = filter
      ? recipe.healthLabels.some((label) => label.includes(filter))
      : true;

    return (matchesName || matchesHealth) && matchesFilter;
  });

  return (
    <Box>
      <Hero userInput={userInput} setUserInput={setUserInput} />

      <FilterTags filter={filter} setFilter={setFilter} />

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
        spacing={6}
        p={5}
        justifyItems="center"
      >
        {displayedRecipes.length > 0 ? (
          displayedRecipes.map((recipe) => (
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
      <Center>
        <Button mb={5} onClick={() => setSelectedRecipe(null)}>
          Back to recipes
        </Button>
      </Center>
    </Box>
  );
};
