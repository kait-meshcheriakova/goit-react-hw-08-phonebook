import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex
      bgImage="url('/images/gaara.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bg="#dffecf"
      align="center"
      justify="center"
      h="100vh"
    >
      <Box p={6} rounded="md" w={500}>
        <Text
          as="h2"
          textAlign="center"
          fontSize={30}
          fontWeight={700}
          mb={4}
          bgGradient="linear(to-l, #23eb27, #82d47b)"
          bgClip="text"
        >
          SIGN IN
        </Text>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Text
            as="label"
            fontSize="24px"
            fontWeight="semibold"
            bgGradient="linear(to-l, #23eb27, #82d47b)"
            bgClip="text"
          >
            Enter your email
            <Input
              fontSize="24px"
              fontWeight="semibold"
              width="400px"
              padding="10px"
              margin="0 auto"
              borderRadius="4px"
              border="2px solid #82d47b"
              type="email"
              name="email"
            />
          </Text>
          <Text
            as="label"
            fontSize="24px"
            fontWeight="semibold"
            bgGradient="linear(to-l, #23eb27, #82d47b)"
            bgClip="text"
          >
            Enter password
            <Input
              fontSize="24px"
              fontWeight="semibold"
              width="400px"
              padding="10px"
              margin="0 auto"
              borderRadius="4px"
              border="2px solid #82d47b"
              type="password"
              name="password"
            />
          </Text>
          <Button
            border="1px solid #82d47b"
            borderRadius="4px 8px"
            bgGradient="linear(to-l, #23eb27, #82d47b)"
            mt={4}
            type="submit"
            colorScheme="green"
            _activeLink={{ bg: 'white', color: '#82d47b' }}
          >
            Log In
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
