import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Box, Container, Flex } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" py={2}>
      <Container maxW=" container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
  );
};
