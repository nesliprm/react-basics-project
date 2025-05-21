import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <InputGroup ml={10} mt={20} w={{ base: "90%", sm: "80%", md: "500px" }}>
      <InputLeftElement>
        <SearchIcon color="gray.400" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search recipes"
        borderRadius="2xl"
        bg="white"
      />
    </InputGroup>
  );
};
