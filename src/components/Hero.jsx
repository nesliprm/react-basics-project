import { SearchBar } from "./SearchBar";
import { Box } from "@chakra-ui/react";
import { MainHeader } from "./MainHeader";
import heroImage from "../assets/hero-image-02-v2.png";

export const Hero = () => {
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
      <SearchBar />
    </Box>
  );
};
