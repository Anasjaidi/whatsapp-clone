import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const Home = () => {
  return (
		<Container maxW={"xl"} centerContent>
			<Box
				display="flex"
				justifyContent={"center"}
				p={3}
				bg={"white"}
				w={"100%"}
				borderRadius={"lg"}
				m={"40px 0 15px 0"}
				borderWidth={"1px"}
			>
				<Text fontSize={"4xl"} fontFamily={"work sans"}>
					Talk-A-Live
				</Text>
			</Box>
			<Box
				borderWidth={"1px"}
				p={3}
				bg={"white"}
				w={"100%"}
				borderRadius={"lg"}
        color={'black'}
			>
        <Tabs variant={'soft-rounded'}>
          <TabList m={'1em'}>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
			</Box>
		</Container>
	);
}

export default Home