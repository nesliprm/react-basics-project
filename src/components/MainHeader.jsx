import { Heading, Box, Icon, Link, HStack, Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export const MainHeader = ({ setSelectedRecipe }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={5}
    >
      <HStack>
        <Heading
          fontFamily="Lobster"
          fontSize="7xl"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => setSelectedRecipe(null)}
        >
          Clean Plate
        </Heading>
        <Text pl={3} pt={5}>
          Recipe inspiration for your next clean plate.
        </Text>
      </HStack>

      <HStack pt={6}>
        <Link fontSize={12}>Contact us!</Link>
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
    </Box>
  );
};
