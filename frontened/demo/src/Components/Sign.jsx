import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, VStack, Text, Select, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { userSignUp } from '../Redux/Auth/action'

export const Sign = () => {
    const toast = useToast()
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [gender, setGender] = React.useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSign = () => {
        console.log("1")
        const payload = {
            name,
            email,
            gender,
            password
        }
        dispatch(userSignUp(payload))
        navigate("/login")
        console.log(payload)
        toast({
            title: "SignUp successful",
            description: "SignUp successful",
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
        })


    }


    return (
        <Box w={['full', 'md']}
            p={[8, 10]}
            mt={[10, '30vh']}
            mx="auto"
            border={['cyan', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
        >
            <VStack spacing={4} align="flex-start" w='full'>
                <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                    <Heading>Sign Up</Heading>
                    <Text>Enter your Details to SignUp</Text>
                </VStack>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input rounded="none" variant="filled" type="name" onChange={(e) => setName(e.target.value)} value={name} />
                </FormControl>
                <FormControl>
                    <FormLabel>E-mail Address</FormLabel>
                    <Input rounded="none" variant="filled" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input rounded="none" variant="filled" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </FormControl>
                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <Select placeholder='Select option' onChange={(e) => setGender(e.target.value)} value={gender} >
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </Select>

                </FormControl>
                <HStack w="full" justify="space-between">
                    <Checkbox colorScheme="blue">Save Details</Checkbox>
                </HStack>
                <Button rounded="none" colorScheme='blue' w={['full', 'auto']} onClick={handleSign}>Sign Up</Button>
            </VStack>
        </Box>
    )
}


