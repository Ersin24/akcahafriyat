import { Box, Heading, SimpleGrid, Text, Image, Stack } from '@chakra-ui/react';

const services = [
  {
    title: "Mini Kepçe Kiralama",
    image: "/image/cat-2579431_1280.jpg",
  },
  {
    title: "Kazı & Dolgu İşleri",
    image: "/image/mining-excavator-1736293_1280.jpg", 
  },
  {
    title: "Moloz & Enkaz Taşıma",
    image: "/image/building-2495413_1280.jpg",
  },
  {
    title: "Bahçe Düzenleme",
    image: "/image/path-4284677_1280.jpg",
  },
  {
    title: "İnşaat Öncesi Temizlik",
    image: "/image/sweeper-7218811_1280.jpg",
  },
];

export default function ServicesSection() {
  return (
    <Box id="hizmetler" py={16} px={4} bg="gray.50">
      <Heading textAlign="center" mb={10}>Hizmetlerimiz</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} maxW="1000px" mx="auto">
        {services.map((service, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            boxShadow="md"
          >
            <Stack spacing={3} align="center">
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  objectFit="cover"
                  borderRadius="md"
                  boxSize="200px"
                />
              )}
              <Text fontSize="lg" fontWeight="semibold" textAlign="center">
                {service.title}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
