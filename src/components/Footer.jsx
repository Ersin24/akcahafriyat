import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box bg="teal.600" py={6} textAlign="center" color="white">
      <Text>© {new Date().getFullYear()} Akça Hafriyat. Tüm hakları saklıdır.</Text>
    </Box>
  );
}
