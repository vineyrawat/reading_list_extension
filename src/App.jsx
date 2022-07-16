import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuIcon,
  MenuItem,
  Stack,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex bg={"gray.100"} p={3}>
        <Heading fontFamily={"monospace"}>Reading List</Heading>
      </Flex>
      <Stack m={5} spacing={2} overflow={'scroll'} height={500}>
        <ReadingListItem />
        <ReadingListItem />
        <ReadingListItem />
        <ReadingListItem />
        <ReadingListItem />
        <ReadingListItem />
      </Stack>
      <Flex ></Flex>
    </>
  );
}

export default App;

import React from "react";

const ReadingListItem = () => {
  return (
    <Stack px={2} py={3} rounded={"md"} border={"1px"} borderColor={"gray.200"}>
      <Checkbox>
        <Text fontWeight={"semibold"} noOfLines={1} size={"md"}>
          How to create a node js server with express using passport js
        </Text>
        <Text noOfLines={2}>
          How to create a node js server with express using passport js
        </Text>
      </Checkbox>
      <Divider />
      <Flex>
        <ButtonGroup>
          <Button colorScheme={"blue"} variant={"ghost"}>
            Open
          </Button>
          <Button variant={"ghost"} colorScheme="red">
            Delete
          </Button>
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};
