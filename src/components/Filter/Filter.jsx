import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { Box, Text, Input } from '@chakra-ui/react';

function Filter() {
  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  const dispatch = useDispatch();
  return (
    <Box mb="12px" mt="32px">
      <Text
        as="label"
        fontSize="28px"
        fontWeight="semibold"
        paddingLeft="40px"
        bgGradient="linear(to-l, #23eb27, #82d47b)"
        bgClip="text"
      >
        Find contacts by name
        <Input
          fontSize="24px"
          fontWeight="semibold"
          width="400px"
          padding="10px"
          margin="0 auto"
          color="black"
          borderRadius="4px"
          border="1px solid #82d47b"
          type="text"
          value={useSelector(selectFilter)}
          onChange={handleFilterChange}
        />
      </Text>
    </Box>
  );
}

export default Filter;
