import { Box } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Hero } from "../components/Hero";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = () => {
  const item = data.hits[3].recipe;

  return (
    <Box>
      <Hero />
      <RecipeItemCard
        label={item.label}
        image={item.image}
        dietLabels={item.dietLabels}
        cautions={item.cautions}
        mealType={
          item.mealType[0].charAt(0).toUpperCase() + item.mealType[0].slice(1)
        }
        dishType={
          item.dishType[0].charAt(0).toUpperCase() + item.dishType[0].slice(1)
        }
      />
    </Box>
  );
};
