import {
	VStack,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();
	const [show, setShow] = useState(false);

	const submitFormHandler = (e) => {};

	return (
		<div>
			<VStack>
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
				<Button
					style={{ marginTop: "15px" }}
					width={"100%"}
					colorScheme="blue"
					onClick={submitFormHandler}
				>
					Register
				</Button>
				<Button
					style={{ marginTop: "15px" }}
					width={"100%"}
					colorScheme="red"
					onClick={() => {
						setEmail("guest@guest.com");
						setPass("123456");
					}}
				>
					Log In As A Guest Account
				</Button>
			</VStack>
		</div>
	);
};

export default Login;
