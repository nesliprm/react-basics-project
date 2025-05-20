import { Heading, Box, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export const MainHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={5}
    >
      <Heading fontSize="5xl" fontWeight="bold">
        Daily Recipes
      </Heading>
      <Box mt={6}>
        <Icon as={FaInstagram} boxSize={4} />
        <Icon as={FaFacebook} boxSize={4} />
        <Icon as={FaTwitter} boxSize={4} />
        <Icon as={FaTiktok} boxSize={4} />
      </Box>
    </Box>
  );
};
