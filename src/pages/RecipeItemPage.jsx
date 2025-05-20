import {
  Image,
  Text,
  Heading,
  Box,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export const RecipeItemPage = ({ recipe, setSelectedRecipe }) => {
  return (
    <Box>
      <Box display="flex" flexDirection="row">
        <Heading>
          <Text>{recipe.label}</Text>
          <Text fontSize={20} mt={10}>
            For: {recipe.mealType}
          </Text>
          <Text fontSize={20}>Course: {recipe.dishType}</Text>
          <Text fontSize={20}>Cooking time: {recipe.totalTime} mins</Text>
          <Text fontSize={20}>Servings: {recipe.yield}</Text>
        </Heading>
        <Image
          src={recipe.image}
          alt={recipe.label}
          maxWidth="500px"
          objectFit="cover"
        ></Image>
      </Box>
      <Box>
        <Text fontWeight={800} ml={3}>
          Ingredients
        </Text>
        <UnorderedList styleType="none" ml={0}>
          {recipe.ingredientLines.map((ingredient, index) => (
            <ListItem key={index}>- {ingredient}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Button mt={5} onClick={() => setSelectedRecipe(null)}>
        Back to recipes
      </Button>
    </Box>
  );
};
