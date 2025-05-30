import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MainHeader } from "./MainHeader";
import heroImage from "../assets/hero-image-02-v2.png";

export const Hero = ({ userInput, setUserInput, setSelectedRecipe }) => {
  return (
    <Box
      mb={10}
      p={8}
      backgroundImage={heroImage}
      backgroundSize={{ base: "auto", md: "cover" }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height={{ base: "300px", md: "400px" }}
      display="flex"
      flexDirection="column"
    >
      <MainHeader setSelectedRecipe={setSelectedRecipe} />
      <Box
        display="flex"
        flexDir="column"
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Box className="search-bar">
          <InputGroup
            ml={{ base: "4", md: "10" }}
            mt={{ base: "8", md: "20" }}
            w={{ base: "90%", md: "500px" }}
          >
            <InputLeftElement>
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search recipes"
              borderRadius="2xl"
              bg="white"
              focusBorderColor="orange.400"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
          </InputGroup>
        </Box>
        <Text
          display={{ base: "none", md: "block" }}
          ml={20}
          mt={1}
          fontSize="sm"
        >
          Type a recipe name or dietary tag to get started.
        </Text>
      </Box>
    </Box>
  );
};
