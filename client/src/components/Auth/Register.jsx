import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Register = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();
  const [show, setShow] = useState(false);

  const postPic  = file => {}
  const submitFormHandler = e => {}

	return (
		<div>
			<VStack spacing={"5px"}>
				<FormControl isRequired>
					<FormLabel>Full-name</FormLabel>
					<Input
						placeholder="Enter your name"
						onChange={(e) => setName(e.target.value)}
					></Input>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>email</FormLabel>
					<Input
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
					></Input>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>password</FormLabel>
					<InputGroup>
						<Input
							placeholder="Enter your password"
							type={show ? "text" : "password"}
							onChange={(e) => setPass(e.target.value)}
						></Input>
						<InputRightElement width={"4.5rem"}>
							<Button
								height={"1.74rem"}
								size={"sm"}
								onClick={(e) => setShow((s) => !s)}
							>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Confirm password</FormLabel>
					<InputGroup>
						<Input
							placeholder="Enter your password"
							type={show ? "text" : "password"}
							onChange={(e) => setPass(e.target.value)}
						></Input>
						<InputRightElement width={"4.5rem"}>
							<Button
								height={"1.74rem"}
								size={"sm"}
								onClick={(e) => setShow((s) => !s)}
							>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<FormControl>
					<FormLabel>Picture</FormLabel>
					<Input
						type="file"
						accept="image/*"
						onChange={postPic}
						p={1.5}
					></Input>
				</FormControl>
				<Button style={{ marginTop: "15px" }} width={"100%"} colorScheme="blue" onClick={submitFormHandler}>
					Register
				</Button>
			</VStack>
		</div>
	);
};

export default Register;
