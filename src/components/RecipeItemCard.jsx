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
      borderRadius={30}
      w="100%"
      maxW="320px"
      onClick={() => setSelectedRecipe(recipe)}
      cursor={"pointer"}
    >
      <CardHeader>
        <Image
          boxSize="300px"
          objectFit="cover"
          borderRadius={20}
          src={image}
          alt={label}
        />
        <Heading size="md" mt={2} mb={-6}>
          {label}
        </Heading>
      </CardHeader>
      <CardBody fontSize="sm">
        <Box mt={2}>
          <Text>
            <strong>Meal:</strong>{" "}
            {mealType[0].charAt(0).toUpperCase() + mealType[0].slice(1)}
          </Text>
          <Text>
            <strong>Course:</strong>{" "}
            {dishType[0].charAt(0).toUpperCase() + dishType[0].slice(1)}
          </Text>
        </Box>

        <Box mt={3}>
          <Box>
            {dietLabels.length > 0 ? (
              <>
                <strong>Diet:</strong>
                {dietLabels.map((label, index) => (
                  <Text key={index}>{label}</Text>
                ))}
              </>
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box mt={3}>
          <Box>
            {cautions.length > 0 ? (
              <>
                <strong>Contains:</strong>
                {cautions.map((label, index) => (
                  <Text key={index}> {label}</Text>
                ))}
              </>
            ) : (
              ""
            )}
          </Box>
        </Box>
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
