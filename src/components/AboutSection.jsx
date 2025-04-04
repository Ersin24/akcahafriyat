import { Box, Heading, Text } from '@chakra-ui/react';

export default function AboutSection() {
  return (
    <Box id="hakkimizda" py={16} px={6}>
      <Heading mb={6} textAlign="center">Hakkımızda</Heading>
      <Box maxW="900px" mx="auto">
        <Text fontSize="md" color="gray.700" textAlign="center">
          Çanakkale Hafriyat, yıllardır sektörde güvenle hizmet veren bir firmadır. 
          Müşteri memnuniyetini ön planda tutarak kazı, dolgu, moloz taşıma gibi birçok alanda kaliteli hizmet sunar. 
          Mini kepçe kiralama gibi özel hizmetlerimizle her türlü projeye uygun çözümler üretiriz.
        </Text>
      </Box>
    </Box>
  );
}
