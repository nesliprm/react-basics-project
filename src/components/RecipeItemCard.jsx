import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Tag,
  TagLabel,
  Wrap,
  Box,
} from "@chakra-ui/react";

export const RecipeItemCard = ({ recipe, setSelectedRecipe }) => {
  const {
    label,
    image,
    dietLabels = [],
    cautions = [],
    mealType = [],
    dishType = [],
    healthLabels = [],
  } = recipe;

  const filteredLabels = healthLabels.filter(
    (label) =>
      label === "Vegetarian" || label === "Vegan" || label === "Pescatarian"
  );

  return (
    <Card
      width="320px"
      onClick={() => setSelectedRecipe(recipe)}
      cursor={"pointer"}
    >
      <CardHeader>
        <Image
          boxSize="300px"
          objectFit="cover"
          borderRadius={10}
          src={image}
          alt={label}
        />
        <Heading size="lg" mt={2}>
          {label}
        </Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Text>Diet:</Text>
          <Box>
            {dietLabels.map((label, index) => (
              <Tag key={index}>{label}</Tag>
            ))}
          </Box>
        </Box>
        <Box>
          <Text>Contains: </Text>
          <Box>
            {cautions.map((label, index) => (
              <Text key={index}>{label}</Text>
            ))}
          </Box>
        </Box>

        <Text>
          Meal: {mealType[0].charAt(0).toUpperCase() + mealType[0].slice(1)}
        </Text>
        <Text>
          Course: {dishType[0].charAt(0).toUpperCase() + dishType[0].slice(1)}
        </Text>
      </CardBody>
      <CardFooter>
        <Wrap>
          {filteredLabels.map((label, index) => (
            <Tag
              key={index}
              size={"sm"}
              bg={"orange.100"}
              whiteSpace={"normal"}
            >
              <TagLabel>{label}</TagLabel>
            </Tag>
          ))}
        </Wrap>
      </CardFooter>
    </Card>
  );
};
