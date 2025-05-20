import { Box, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Hero } from "../components/Hero";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const recipes = data.hits.map((hit) => hit.recipe);

  return (
    <Box>
      <Hero />

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
        p={5}
        justifyItems="center"
      >
        {recipes.map((recipe) => (
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
        ))}
      </SimpleGrid>
    </Box>
  );
};
