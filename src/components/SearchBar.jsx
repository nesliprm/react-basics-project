import { Input, Button, Box } from "@chakra-ui/react";

export const SearchBar = () => {
  return (
    <Box display="flex" flexDirection="row" gap={1}>
      <Input placeholder="Start typing..." />
      <Button>Search</Button>
    </Box>
  );
};
