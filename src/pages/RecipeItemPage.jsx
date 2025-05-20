import {
  Image,
  Text,
  Heading,
  Box,
  Button,
  ListItem,
  UnorderedList,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { MainHeader } from "../components/MainHeader";
import HeaderBackground from "../assets/header-background.png";

export const RecipeItemPage = ({ recipe, setSelectedRecipe }) => {
  const energy = recipe.totalNutrients.ENERC_KCAL;
  const protein = recipe.totalNutrients.PROCNT;
  const fat = recipe.totalNutrients.FAT;
  const carbs = recipe.totalNutrients.CHOCDF;
  const cholesterol = recipe.totalNutrients.CHOLE;
  const sodium = recipe.totalNutrients.NA;

  return (
    <>
      <Box
        p={8}
        backgroundImage={HeaderBackground}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <MainHeader />
      </Box>

      <Box py={10} px={20}>
        <Box display="flex" flexDirection="row" gap={10}>
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
            maxWidth="50%"
            objectFit="cover"
          />
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

        <Box mt={10} display="flex" flexDirection="row" gap={10}>
          <Box className="nutrients">
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
          <Box className="diet">
            <Text>Suitable for: </Text>
            {recipe.dietLabels.map((label, index) => (
              <Text key={index}>{label}</Text>
            ))}
          </Box>

          <Box className="cautions">
            <Text>Contains: </Text>
            {recipe.cautions.map((label, index) => (
              <Text key={index}>{label}</Text>
            ))}
          </Box>
        </Box>
        <Box className="tags" mt={10}>
          {recipe.healthLabels.map((label, index) => (
            <Tag
              key={index}
              size={"sm"}
              bg={"orange.100"}
              whiteSpace={"normal"}
            >
              <TagLabel>{label}</TagLabel>
            </Tag>
          ))}
        </Box>

        <Button mt={5} onClick={() => setSelectedRecipe(null)}>
          Back to recipes
        </Button>
      </Box>
    </>
  );
};
