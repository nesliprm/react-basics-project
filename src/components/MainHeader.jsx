import { Heading, Box, Icon, Link, HStack, Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export const MainHeader = ({ setSelectedRecipe }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "center", md: "flex-start" }}
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
        <Link>
          <Icon as={FaInstagram} boxSize={4} />
        </Link>
        <Link>
          <Icon as={FaFacebook} boxSize={4} />
        </Link>
        <Link>
          <Icon as={FaTwitter} boxSize={4} />
        </Link>
        <Link>
          <Icon as={FaTiktok} boxSize={4} />
        </Link>
      </HStack>

      <HStack>
        <Heading
          fontFamily="Lobster"
          fontSize={{ base: "6xl", md: "7xl" }}
          fontWeight="bold"
          cursor="pointer"
          onClick={() => setSelectedRecipe(null)}
        >
          Clean Plate
        </Heading>
        <Text
          display={{ base: "none", lg: "block" }}
          fontSize={{ base: "sm", md: "md" }}
          px={{ base: 2, md: 0 }}
        >
          Recipe inspiration for your next clean plate.
        </Text>
      </HStack>
    </Box>
  );
};
