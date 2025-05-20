import { Button } from "@chakra-ui/react";

export const RecipeItemPage = ({ setSelectedRecipe }) => {
  return (
    <Button mt={5} onClick={() => setSelectedRecipe(null)}>
      Back to recipes
    </Button>
  );
};
