import { SearchBar } from "./SearchBar";
import { Box } from "@chakra-ui/react";
import { MainHeader } from "./MainHeader";
import heroImage from "../assets/hero-image-01.jpg";

export const Hero = () => {
  return (
    <Box
      pb={8}
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
