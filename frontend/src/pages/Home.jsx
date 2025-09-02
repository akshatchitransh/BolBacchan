import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Flex} from '@chakra-ui/react';
import {Login} from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function Homepage() {
  const navigate = useNavigate();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"))

    if(user) navigate("/chats")
  },[navigate])

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={5}
        bg=""
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        //borderWidth="1.5px"
        //borderColor={"pink.100"}
      >
         <Flex justify="center" align="down" height="50px">
          <Text fontSize="4xl" fontFamily="Work sans" color="black">
           BOL-BACCHAN
          </Text>
        </Flex>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg"  borderColor={"pink.100"}>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;