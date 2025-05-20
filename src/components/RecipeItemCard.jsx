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
} from "@chakra-ui/react";

export const RecipeItemCard = ({
  label,
  image,
  dietLabels,
  healthLabels,
  cautions,
  mealType,
  dishType,
  item,
  setSelectedItem,
}) => {
  return (
    <Card
      width="320px"
      onClick={() => setSelectedItem(item)}
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
        <Text>Diet: {dietLabels}</Text>
        <Text>Contains: {cautions}</Text>
        <Text>Meal: {mealType}</Text>
        <Text>Course: {dishType}</Text>
      </CardBody>
      <CardFooter>
        <Wrap>
          {healthLabels.map((label, index) => (
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
