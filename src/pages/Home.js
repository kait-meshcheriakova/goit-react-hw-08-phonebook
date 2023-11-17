import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      bg="#dffecf"
      minHeight="calc(100vh - 50px)"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontWeight=" 500px"
        fontSize="48px"
        textAlign="center"
        bgGradient="linear(to-l, #23eb27, #82d47b)"
        bgClip="text"
      >
        Welcome to the phone book!
      </Text>
    </Box>
  );
}
