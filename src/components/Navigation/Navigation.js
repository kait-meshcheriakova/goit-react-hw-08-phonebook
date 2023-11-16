import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Button
        as={NavLink}
        to="/"
        colorScheme="green"
        _activeLink={{ bg: 'white', color: '#82d47b' }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          as={NavLink}
          to="/contacts"
          colorScheme="green"
          _activeLink={{ bg: 'white', color: '#82d47b' }}
          ml={4}
        >
          Contacts
        </Button>
      )}
    </nav>
  );
};
