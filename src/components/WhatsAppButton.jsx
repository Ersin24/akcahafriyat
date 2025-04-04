import { Box, Button, Icon } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <Box position="fixed" bottom="90px" right="20px" zIndex="999">
      <Button
        leftIcon={<Icon as={FaWhatsapp} boxSize={5} />}
        colorScheme="whatsapp"
        size="lg"
        onClick={() =>
          window.open(
            'https://wa.me/905335013017?text=Merhaba%20hafriyat%20hizmeti%20ile%20ilgili%20bilgi%20almak%20istiyorum',
            '_blank'
          )
        }
      >
        WhatsApp'tan Yaz
      </Button>
    </Box>
  );
}
