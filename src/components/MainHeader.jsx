import { Heading, Box, Icon, Link, HStack, Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export const MainHeader = ({ setSelectedRecipe }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "center", md: "left" }}
      textAlign={{ base: "center", md: "left" }}
      gap={5}
    >
      <HStack
        spacing={3}
        order={{ base: 0, md: 1 }}
        pt={{ base: 0, md: 6 }}
        justifyContent={{ base: "center", md: "flex-end" }}
        wrap="wrap"
      >
        <Link fontSize="xs">Contact us!</Link>
        <Link href="https://www.instagram.com/" target="blank">
          <Icon as={FaInstagram} boxSize={4} />
        </Link>
        <Link href="https://www.facebook.com/" target="blank">
          <Icon as={FaFacebook} boxSize={4} />
        </Link>
        <Link href="https://www.x.com/" target="blank">
          <Icon as={FaTwitter} boxSize={4} />
        </Link>
        <Link href="https://www.tiktok.com/" target="blank">
          <Icon as={FaTiktok} boxSize={4} />
        </Link>
      </HStack>

      <HStack spacing={4}>
        <Heading
          fontFamily="Lobster"
          fontSize={{ base: "6xl", md: "7xl" }}
          fontWeight="bold"
          cursor="pointer"
          onClick={() => setSelectedRecipe(null)}
        >
          Clean Plate
        </Heading>
        <Text fontSize="sm" pt={5} display={{ base: "none", lg: "flex" }}>
          *Recipe inspiration for your next clean plate.
        </Text>
      </HStack>
    </Box>
  );
};
