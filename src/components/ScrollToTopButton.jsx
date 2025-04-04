import { useEffect, useState } from 'react';
import { IconButton, Fade } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll takibi
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Fade in={isVisible}>
      <IconButton
        icon={<ArrowUpIcon />}
        onClick={scrollToTop}
        position="fixed"
        bottom="30px"
        right="30px"
        zIndex="999"
        colorScheme="teal"
        aria-label="Yukarı çık"
        borderRadius="full"
        boxShadow="lg"
      />
    </Fade>
  );
}
