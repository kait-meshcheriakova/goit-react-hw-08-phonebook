import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box display="flex" gap="15px">
      <Button
        as={NavLink}
        to="/register"
        colorScheme="green"
        _activeLink={{ bg: 'white', color: '#82d47b' }}
      >
        Register
      </Button>
      <Button
        as={NavLink}
        to="/login"
        colorScheme="green"
        _activeLink={{ bg: 'white', color: '#82d47b' }}
      >
        Log In
      </Button>
    </Box>
  );
};
