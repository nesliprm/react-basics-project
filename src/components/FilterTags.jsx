import { Center, Tag, TagLabel, Wrap } from "@chakra-ui/react";

export const FilterTags = ({ filter, setFilter }) => {
  const tags = ["Vegan", "Vegetarian", "Pescatarian"];

  return (
    <Center mb={5}>
      <Wrap>
        {tags.map((tag, index) => (
          <Tag
            size={"md"}
            bg={filter === tag ? "orange.200" : "orange.100"}
            whiteSpace={"normal"}
            key={index}
            cursor="pointer"
            onClick={() => setFilter(filter === tag ? null : tag)}
          >
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </Wrap>
    </Center>
  );
};
