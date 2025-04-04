import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Box bg="#F7FAFC">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </Box>
  );
}

export default App;
