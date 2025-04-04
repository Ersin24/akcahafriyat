import { Box } from '@chakra-ui/react';

export default function VideoSection() {
  return (
    <Box id="video" maxW="900px" mx="auto" my={10} px={4}>
      <video
        width="100%"
        muted
        loop
        autoPlay
        playsInline
        style={{ borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
      >
        <source src="video/149811-797189157_medium.mp4" type="video/mp4" />
        Tarayıcınız video elementini desteklemiyor.
      </video>
    </Box>
  );
}
