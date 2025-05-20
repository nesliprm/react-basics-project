import { Box, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Hero } from "../components/Hero";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const recipes = data.hits;

  return (
    <Box>
      <Hero />
      <SimpleGrid minChildWidth="320px" spacing={5}>
        {recipes.map((recipe) => (
          <RecipeItemCard
            recipe={recipe}
            key={recipe.id}
            label={recipe.label}
            image={recipe.image}
            dietLabels={recipe.dietLabels}
            cautions={recipe.cautions}
            mealType={
              recipe.mealType[0].charAt(0).toUpperCase() +
              recipe.mealType[0].slice(1)
            }
            dishType={
              recipe.dishType[0].charAt(0).toUpperCase() +
              recipe.dishType[0].slice(1)
            }
            setSelectedRecipe={setSelectedRecipe}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
