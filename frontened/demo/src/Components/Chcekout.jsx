import React from "react";
import { useState } from "react";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
// import Form1 from '../Components/Form/Form1';
import Form2 from '../Components/Form/Form2';
import Form3 from "../Components/Form/Form3";
import axios from "axios";
import { useSelector } from "react-redux";
export default function Checkout() {
    const token = useSelector((store) => store.authReducer.token)
    // console.log(token)
    const navigate = useNavigate();
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    const [isLoading, setIsLoading] = useState(false)
    const handleOrder = () => {
        setStep(step + 1);
        if (step === 3) {
            setProgress(100);
        } else {
            setProgress(progress + 33.33);
        }
        if (step === 2) {
            setIsLoading(true)
            console.log(token)
            axios.post(`https://relieved-earmuffs-colt.cyclic.app/order`, { data: "something" }, { headers: { authorization: token } })
                .then((res) => {
                    console.log(res.data)
                    setIsLoading(false)
                    toast({
                        title: "Payment Successfull.",
                        description: "Thank You for Purchasing Our Product",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                        position: "top",
                    });

                    navigate("/");

                }).catch((e) => {
                    console.log(e)
                    setIsLoading(false)
                    toast({
                        title: "Order Failed.",
                        description: "Order Failed.",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                        position: "top",
                    });
                })
        }
    }


    return (
        <>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
            >
                <Progress
                    hasStripe
                    value={progress}
                    mb="5%"
                    mx="5%"
                    isAnimated
                ></Progress>
                {step === 1 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1);
                                    setProgress(progress - 33.33);
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%"
                            >
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                onClick={handleOrder}
                                isDisabled={step === 3}
                                colorScheme="teal"
                                variant="outline"
                                isLoading={isLoading}
                            >
                                Next
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button

                                w="7rem"
                                colorScheme="red"
                                variant="solid"

                            >
                                Home
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}