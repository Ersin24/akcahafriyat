import {
  Box,
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  VStack,
  Link,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavClick = (id) => {
    onClose(); // önce drawer'ı kapat
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 250); // drawer kapanma animasyonunu bekle
  };

  return (
    <Box bg="teal.600" px={4} py={3} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Akça Hafriyat
        </Text>
        <Spacer />
        <HStack
          display={{ base: "none", md: "flex" }}
          spacing={6}
          fontSize="md"
        >
          <Link href="#hero">Anasayfa</Link>
          <Link href="#hakkimizda">Hakkımızda</Link>
          <Link href="#hizmetler">Hizmetler</Link>
          <Link href="#iletisim">İletişim</Link>
        </HStack>

        {/* Mobil hamburger butonu */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          aria-label="Menüyü Aç"
          color="white"
          _hover={{ bg: "teal.700" }}
        />
      </Flex>
      {/* Drawer Menüsü */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="teal.600" color="white">
          <Flex justify="flex-end" p={4}>
            <IconButton
              icon={<CloseIcon />}
              onClick={onClose}
              variant="ghost"
              aria-label="Menüyü Kapat"
              color="white"
            />
          </Flex>
          <DrawerBody>
            <VStack spacing={6} align="start" fontSize="lg">
              <Link onClick={() => handleNavClick("hero")}>Anasayfa</Link>
              <Link onClick={() => handleNavClick("hakkimizda")}>
                Hakkımızda
              </Link>
              <Link onClick={() => handleNavClick("hizmetler")}>Hizmetler</Link>
              <Link onClick={() => handleNavClick("iletisim")}>İletişim</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
