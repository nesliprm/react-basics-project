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

export const Hero = ({ userInput, setUserInput }) => {
  return (
    <Box
      mb={10}
      p={8}
      backgroundImage={heroImage}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height={{ base: "300px", md: "400px" }}
      display="flex"
      flexDirection="column"
    >
      <MainHeader />
      <Box>
        <InputGroup ml={10} mt={20} w={{ base: "90%", sm: "80%", md: "500px" }}>
          <InputLeftElement>
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search recipes"
            borderRadius="2xl"
            bg="white"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
        </InputGroup>
      </Box>
      <Text ml={20} mt={1} fontSize="sm">
        Type a recipe name or dietary tag to get started.
      </Text>
    </Box>
  );
};
