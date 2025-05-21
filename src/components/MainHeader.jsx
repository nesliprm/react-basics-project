import { Heading, Box, Icon, Link, HStack } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export const MainHeader = ({ setSelectedRecipe }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={5}
    >
      <Heading
        fontSize="5xl"
        fontWeight="bold"
        cursor="pointer"
        onClick={() => setSelectedRecipe(null)}
      >
        Daily Recipes
      </Heading>
      <HStack>
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
