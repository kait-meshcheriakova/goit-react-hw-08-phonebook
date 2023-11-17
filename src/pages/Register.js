import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Flex bg="#dffecf" alignItems="center" justify="center" h="100vh">
      <Box
        alignItems="center"
        // bgGradient="linear(to-l, #23eb27, #82d47b)"
        p={6}
        rounded="md"
        w={500}
      >
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
            Enter your name
            <Input
              fontSize="24px"
              fontWeight="semibold"
              width="400px"
              padding="10px"
              margin="0 auto"
              color="black"
              borderRadius="4px"
              border="3px solid #82d47b"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Text>

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
              border="3px solid #82d47b"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
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
              value={password}
              onChange={handleChange}
            />
          </Text>

          <Button
            border="1px solid #82d47b"
            borderRadius="4px 8px"
            bgGradient="linear(to-l, #23eb27, #82d47b)"
            mt={4}
            alignItems="center"
            type="submit"
            colorScheme="green"
            _activeLink={{ bg: 'white', color: '#82d47b' }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
