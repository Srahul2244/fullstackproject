import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, VStack, Text, Select, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../Redux/Auth/action'


export const Login = () => {
    const toast = useToast()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch()
    const user = useSelector((store) => store.authReducer.user)
    const navigate = useNavigate()
    console.log(user)


    const handleLogin = () => {

        const payload = {
            email,
            password
        }
        dispatch(userLogin(payload))
        console.log(payload)

        toast({
            title: "login successful",
            description: "Login successful",
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
        })
        // navigate("/products/mens")
        setTimeout(() => {
            navigate("/products/mens")
        }, 5000);
    }



    return (
        <Box w={['full', 'md']}
            p={[8, 10]}
            mt={[10, '10vh']}
            mx="auto"
            border={['cyan', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
        >
            <VStack spacing={4} align="flex-start" w='full'>
                <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                    <Heading>Login</Heading>
                    <Text>Enter your e-mail and password to login</Text>
                </VStack>
                <FormControl>
                    <FormLabel>E-mail Address</FormLabel>
                    <Input rounded="none" variant="filled" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input rounded="none" variant="filled" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </FormControl>

                <HStack w="full" justify="space-between">
                    <Checkbox>Remember me.</Checkbox>
                    <Button variant="link" colorScheme="blue">Forgot Password</Button>
                </HStack>
                <Button rounded="none" colorScheme='blue' w={['full', 'auto']} onClick={handleLogin}>Login</Button>
            </VStack>
        </Box>
    )
}



