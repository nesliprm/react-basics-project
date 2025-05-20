import { Input, Button, Box } from "@chakra-ui/react";

export const SearchBar = () => {
  return (
    <Box>
      <Input placeholder="Start typing..." />
      <Button>Search</Button>
    </Box>
  );
};
