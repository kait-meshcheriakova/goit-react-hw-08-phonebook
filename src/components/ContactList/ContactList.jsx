import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Button, Card, CardBody, Flex, Text } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Flex
      as="ul"
      flexDirection="column"
      mt={12}
      w="400px"
      border="1px solid #82d47b"
      padding="12px"
    >
      {contacts.map(({ id, name, number }) => (
        <Card as="li" w="100%" mb="5px" border="5px solid #82d47b" key={id}>
          <CardBody
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text color="black" fontSize="20px" fontWeight="semibold">
              {name}:
            </Text>
            <Box alignItems="center" display="flex" gap={7}>
              <Text fontWeight="semibold" fontSize="20px">
                {number}
              </Text>

              <Button
                bg="#82d47b"
                border="1px solid #82d47b"
                borderRadius="4px 8px"
                type="button"
                name="delete"
                colorScheme="green"
                _activeLink={{ bg: 'white', color: '#82d47b' }}
                bgGradient="linear(to-l, #23eb27, #82d47b)"
                onClick={() => dispatch(deleteContact(id))}
              >
                &times;
              </Button>
            </Box>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};
export default ContactList;
