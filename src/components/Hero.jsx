import { SearchBar } from "./SearchBar";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box textAlign="center" pb={8}>
      <Heading>
        <Text fontSize="5xl" fontWeight="bold" bg={"blue.100"} py={5}>
          Daily Recipes
        </Text>
      </Heading>
      <Image src="#" />
      <SearchBar />
    </Box>
  );
};
