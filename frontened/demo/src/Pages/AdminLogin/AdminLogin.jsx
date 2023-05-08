import {
  Box,
  Input,
  Text,
  FormLabel,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Loginfunction } from "../../../src/Redux/admin/admin.actions";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const dispatch = useDispatch();
  const toast = useToast();


  const handleSubmit = (e) => {
    const payload = {
      name,
      email,
      password,
    }
    toast({
      title: "sign up successful",
      description: "signin successful",
      status: "info",
      duration: 1000,
      isClosable: true,
      position: "top",
    })
    dispatch(Loginfunction(payload))

  };



  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        h="100px"
        border="2px solid black"
        bg="black"
        justifyContent="space-between"
        gap="30px"
      >
        <Text
          display={{ base: "inline", sm: "inline", md: "inline", lg: "inline" }}
          fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "6xl" }}
          fontWeight="600"
          color="white"
        >
          NRP
        </Text>
        <Box></Box>
      </Box>

      <Box textAlign="center">
        <Text
          fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "6xl" }}
          fontWeight="600"
          color="teal"
          marginTop="5px"
        >
          Welcome to NRP Admin Panel.
        </Text>
      </Box>

      <Box
        w={{ base: "90%", sm: "70%", md: "60%", lg: "30%" }}
        h="500px"
        margin="auto"
        marginTop="5px"
      >
        <Box mb="20px">
          <Text
            fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "4xl" }}
            fontWeight="600"
          >
            Sign in here
          </Text>
        </Box>
        <Box mb="20px">
          <FormLabel>Enter First Name</FormLabel>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Admin Name"
            w="100%"
            h="55px"
            border="2px solid"
            type="text"
            value={name}
          />
        </Box>
        <Box mb="20px">
          <FormLabel>Enter Email</FormLabel>
          <Input
            placeholder="Email Address"
            w="100%"
            h="55px"
            border="2px solid"
            type="email"
            onChange={(e) => setEmail(e.target.value)} value={email}
          />
        </Box>
        <Box mb="20px">
          <FormLabel>Enter Password</FormLabel>
          <Input

            placeholder="Password"
            w="100%"
            h="55px"
            border="2px solid"
            type="password"
            onChange={(e) => setPassword(e.target.value)} value={password}
          />
        </Box>

        <Box mb="10px">
          <Checkbox size="lg" defaultChecked>
            Keep me signed in.
          </Checkbox>
        </Box>
        <Box>
          <Text></Text>
        </Box>

        <Box>
          <Link to="/dashboard">
            <Button
              w="100%"
              bg="#0693e3"
              h="55px"
              fontSize="20px"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
