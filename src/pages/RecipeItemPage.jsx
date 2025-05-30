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
  Center,
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
    <Box>
      <Box
        p={8}
        backgroundImage={HeaderBackground}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <MainHeader setSelectedRecipe={setSelectedRecipe} />
      </Box>

      <Box
        my={{ base: 0, md: 10 }}
        mx={{ base: 4, sm: 10, md: 20, xl: 60 }}
        border={{ base: "none", md: "solid 1px" }}
        borderColor={{ base: "white", md: "blackAlpha.100" }}
        borderRadius={30}
        boxShadow={{ base: "none", md: "md" }}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={10}
        >
          <Heading m={10}>
            <Text>{recipe.label}</Text>
            <Text fontSize={20} mt={10}>
              For:{" "}
              {recipe.mealType[0].charAt(0).toUpperCase() +
                recipe.mealType[0].slice(1)}
            </Text>
            <Text fontSize={20}>
              Course:{" "}
              {recipe.dishType[0].charAt(0).toUpperCase() +
                recipe.dishType[0].slice(1)}
            </Text>
            {recipe.totalTime === 0 ? (
              ""
            ) : (
              <Text fontSize={20}>Cooking time: {recipe.totalTime} mins</Text>
            )}
            <Text fontSize={20}>Servings: {recipe.yield}</Text>
          </Heading>
          <Image
            src={recipe.image}
            alt={recipe.label}
            maxW={{ base: "100%", md: "50%" }}
            maxH="600px"
            objectFit="cover"
            borderTopRightRadius={{ base: 0, md: 30 }}
            borderBottomLeftRadius={{ base: 0, md: 100 }}
          />
        </Box>
        <Box className="ingredients" m={{ base: 5, md: 10 }}>
          <Text fontWeight={800} ml={3}>
            Ingredients
          </Text>
          <UnorderedList styleType="none" ml={0}>
            {recipe.ingredientLines.map((ingredient, index) => (
              <ListItem key={index}>- {ingredient}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box
          m={{ base: 5, md: 10 }}
          display="flex"
          flexDirection="row"
          gap={10}
          fontSize={{ base: "xs", md: "md" }}
        >
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
            {recipe.dietLabels.length > 0 ? (
              <>
                <Text>Suitable for: </Text>
                {recipe.dietLabels.map((label, index) => (
                  <Text key={index}>{label}</Text>
                ))}
              </>
            ) : (
              ""
            )}
          </Box>

          <Box className="cautions">
            {recipe.cautions.length > 0 ? (
              <>
                <Text>Contains: </Text>
                {recipe.cautions.map((label, index) => (
                  <Text key={index}>{label}</Text>
                ))}
              </>
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box className="tags" m={{ base: 5, md: 10 }}>
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
      </Box>
      <Center>
        <Button mb={5} onClick={() => setSelectedRecipe(null)}>
          Back to recipes
        </Button>
      </Center>
    </Box>
  );
};
