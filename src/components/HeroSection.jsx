import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const buttonRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Sayfa en üstteyse (tam başa dönüldüyse)
      if (scrollTop === 0) {
        setIsSticky(false);
        return;
      }

      const buttonTop = buttonRef.current?.getBoundingClientRect().top;

      if (buttonTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box as="section" id="hero" bg="gray.50" py={20} px={4} textAlign="center">
      <Stack spacing={6} maxW="3xl" mx="auto">
        <Heading size="2xl">
          Çanakkale Akça Hafriyat & Mini Kepçe Hizmetleri
        </Heading>
        <Text fontSize="xl" color="gray.700">
          Uygun fiyat, hızlı hizmet ve güvenilir çözümler. Tüm hafriyat işleriniz için hemen bizi arayın!
        </Text>

        {/* Buton */}
        <Box
          ref={buttonRef}
          position={isSticky ? 'fixed' : 'static'}
          top={isSticky ? '0' : 'auto'}
          left="0"
          right="0"
          bg={isSticky ? 'teal.600' : 'transparent'}
          py={isSticky ? 3 : 0}
          boxShadow={isSticky ? 'md' : 'none'}
          zIndex="1000"
          transition="all 0.2s ease-in-out"
        >
          <Button
            size="lg"
            colorScheme={isSticky ? 'whiteAlpha' : 'teal'}
            onClick={() => window.location.href = 'tel:05335013017'}
          >
            Hemen Ara: 0 (533) 501 30 17
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
