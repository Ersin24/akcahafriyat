import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';

export default function ContactSection() {
  return (
    <Box id="iletisim" py={16} px={6} bg="gray.50">
      <Heading textAlign="center" mb={8}>İletişim</Heading>

      <Stack spacing={4} textAlign="center">
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Ramazan Akça
        </Text>
        <Text fontSize="lg">
          Telefon: <strong>0 (533) 501 30 17</strong>
        </Text>
        <Text fontSize="lg">
          Adres: Barbaros Mahallesi, Kazım İnmez Sokak, No:13 Darie:4 <Text fontWeight={"bold"}>Çanakkale Merkez</Text>
        </Text>
      </Stack>

      <Box mt={10} maxW="800px" mx="auto" textAlign="center">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!4v1743800756193!6m8!1m7!1sjCpPr_nQzI4cZ9tTNthOXA!2m2!1d40.13897855883344!2d26.41545833414391!3f297.17038!4f0!5f0.7820865974627469"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <Button
          mt={4}
          colorScheme="teal"
          onClick={() =>
            window.open('https://maps.app.goo.gl/j5RwRbXeYB5Bp92w5', '_blank')
          }
        >
          Yol Tarifi Al
        </Button>
      </Box>
    </Box>
  );
}
