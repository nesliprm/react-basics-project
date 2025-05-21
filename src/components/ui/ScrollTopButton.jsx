import { Button, Center } from "@chakra-ui/react";

export const ScrollTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Center>
      <Button onClick={handleScrollToTop} size="sm">
        ↑ Top
      </Button>
    </Center>
  );
};
