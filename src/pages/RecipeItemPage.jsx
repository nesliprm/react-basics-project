import { Button } from "@chakra-ui/react";

export const RecipeItemPage = ({ setSelectedItem }) => {
  return (
    <Button mt={5} onClick={() => setSelectedItem(null)}>
      Back to recipes
    </Button>
  );
};
