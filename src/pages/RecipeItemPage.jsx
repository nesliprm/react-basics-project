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
  const energy = recipe.totalNutrients.ENERC_KCAL;
  const protein = recipe.totalNutrients.PROCNT;
  const fat = recipe.totalNutrients.FAT;
  const carbs = recipe.totalNutrients.CHOCDF;
  const cholesterol = recipe.totalNutrients.CHOLE;
  const sodium = recipe.totalNutrients.NA;

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
      <Box className="ingredients" mt={10}>
        <Text fontWeight={800} ml={3}>
          Ingredients
        </Text>
        <UnorderedList styleType="none" ml={0}>
          {recipe.ingredientLines.map((ingredient, index) => (
            <ListItem key={index}>- {ingredient}</ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box className="nutrients" mt={10}>
        <Text>
          Energy: {Math.round(energy.quantity)} {energy.unit}
        </Text>
        <Text>
          Protein: {Math.round(protein.quantity)} {protein.unit}
        </Text>
        <Text>
          Fat: {Math.round(fat.quantity)} {fat.unit}
        </Text>
        <Text>
          Carbs: {Math.round(carbs.quantity)} {carbs.unit}
        </Text>
        <Text>
          Cholesterol: {Math.round(cholesterol.quantity)} {cholesterol.unit}
        </Text>
        <Text>
          Sodium: {Math.round(sodium.quantity)} {sodium.unit}
        </Text>
      </Box>

      <Button mt={5} onClick={() => setSelectedRecipe(null)}>
        Back to recipes
      </Button>
    </Box>
  );
};
