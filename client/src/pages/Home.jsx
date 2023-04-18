import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

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
          <TabList>
            <Tab>Login</Tab>
            <Tab>Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>login</TabPanel>
            <TabPanel>register</TabPanel>
          </TabPanels>
        </Tabs>
			</Box>
		</Container>
	);
}

export default Home