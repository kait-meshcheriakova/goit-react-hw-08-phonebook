import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Button, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <Text fontSize="20px" fontWeight="semibold">
        Welcome {user.name}
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        colorScheme="green"
        _activeLink={{ bg: 'white', color: '#82d47b' }}
        ml={4}
      >
        Logout
      </Button>
    </Box>
  );
};
