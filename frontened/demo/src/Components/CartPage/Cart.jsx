


import { Box, Button, Center, Divider, Flex, Spacer, Text, useToast } from "@chakra-ui/react";
import { FiTruck } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./cart.css"
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../../Redux/action";


const style = {
    color: "red",
    BsCursor: "pointer",
}



export const Cart = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { _id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const count = useSelector((store) => store.productReducer.count)
    const token = useSelector((store) => store.authReducer.token)
    const toast = useToast()

    useEffect(() => {
        if (token) {
            dispatch(getCount(token))
        }
    }, [])
    console.log(count)



    let total = 0;
    let totalCount = 0
    if (data) {
        for (let i of data) {
            total += (i.price * i.quantity)
            totalCount++
        }
    }

    function getCart() {
        setIsLoading(true)
        return axios.get("https://relieved-earmuffs-colt.cyclic.app/cart", { headers: { authorization: token } })

    }

    const handleMinus = (data) => {
        // console.log(data)
        data.quantity = - 1
        // console.log(data)
        axios.post("https://relieved-earmuffs-colt.cyclic.app/cart", data, { headers: { authorization: token } })
            .then((r) => {
                handleGetCart()
            }).catch((e) => {
                console.log(e)
            })

    }

    const handlePlus = (data) => {
        console.log(data)
        data.quantity = 1
        console.log(data)
        axios.post('https://relieved-earmuffs-colt.cyclic.app/cart', data, { headers: { authorization: token } })
            .then((r) => {
                handleGetCart()
            }).catch((e) => {
                console.log(e)
            })


    }



    function handleGetCart() {
        getCart().then((res) => {
            // console.log(res.data)
            setData(res.data.data)
            setIsLoading(false)
        })
        if (token) {
            dispatch(getCount(token))
        }
    }

    function handleDelete(_id) {
        axios.delete(`https://relieved-earmuffs-colt.cyclic.app/cart/${_id}`, { headers: { authorization: token } })
            .then(res => handleGetCart())
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        handleGetCart()
    }, [])




    return (
        <>
            {
                isLoading ? <h2>Loading ...</h2> :
                    <Box paddingTop="3rem" bg="rgb(238,238,238)"  >
                        <div className="carts" >
                            <div className="cart">

                                <Flex paddingLeft="20px" paddingRight="20px" marginBottom="20px" paddingTop="20px" paddingBottom="20px" w="510px" bg="white">
                                    <Text fontWeight="600" fontSize="18.4px" color="RGB(45, 45, 45)" fontFamily="Arial">MY BAG</Text>
                                    <Spacer />
                                    <Text>Items are reserved for 60 minutes</Text>
                                </Flex>
                                {!token ? toast({
                                    title: "Please Login first.",
                                    description: "Please Login first to see Cart Page",
                                    status: "info",
                                    duration: 1000,
                                    isClosable: true,
                                    position: "top",
                                }) : data?.map((item) => (
                                    <Box key={item.id} >
                                        <Flex key={item.id} w="510px" paddingBottom="20px" paddingTop="20px" paddingLeft="20px" paddingRight="20px" bg="white">
                                            <Box w="120px">
                                                <img src={item.image} alt="" />
                                            </Box>
                                            <Spacer />
                                            <Box paddingLeft="30px" w="360px" >
                                                <Flex>
                                                    <Text marginBottom="15px" fontSize="18px" fontWeight="600" textAlign="left">Rs {item.price}</Text>
                                                    <Spacer />
                                                    <ImCross style={style} onClick={() => handleDelete(item._id)} />
                                                </Flex>
                                                <Text textAlign="left">{item.title}</Text>
                                                <Flex alignItems="center" gap="20px" m='10px'>
                                                    <Button isDisabled={item.quantity <= 1} onClick={() => handleMinus(item)}>-</Button>{item.quantity}<Button isDisabled={item.quantity >= 10} onClick={() => handlePlus(item)}>+</Button>
                                                </Flex>
                                                <Flex marginTop="10px">
                                                    <Text paddingRight="10px" >{item.category}</Text>
                                                    <Center paddingRight="10px" w="2px" height='25px'>
                                                        <Divider orientation='vertical' />
                                                    </Center>

                                                </Flex>

                                            </Box>
                                        </Flex>
                                        <Center >
                                            <Divider orientation='horizontal' />
                                        </Center>
                                    </Box>

                                ))
                                }




                                <Box marginTop="10px" paddingTop="20px" paddingBottom="20px" paddingLeft="20px" paddingRight="20px" bg="white" w="33rem">
                                    <Flex>
                                        <Box paddingTop="20px" paddingLeft="30px" w="100px">
                                            <FiTruck size="30px" />
                                        </Box>
                                        <Box>
                                            <Text textAlign="left">FREE* STANDARD DELIVERY</Text>

                                            <Text textAlign="left">Faster delivery options available to most countries.</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </div>
                            <Spacer />
                            <div className="cart">
                                <Box paddingTop="20px" paddingBottom="20px" paddingLeft="20px" paddingRight="20px" height="300px" marginTop="1.5rem" bg="white" >
                                    <Text textAlign="left" fontWeight="600" fontSize="18.4px" color="RGB(45, 45, 45)" fontFamily="Arial">TOTAL</Text>
                                    <Center height='25px'>
                                        <Divider orientation='horizontal' />
                                    </Center>
                                    <Flex >
                                        <Text textAlign="left" fontWeight="600" fontSize="16.4px" color="RGB(45, 45, 45)" fontFamily="Arial">Sub-total</Text>
                                        <Spacer />
                                        {total}
                                    </Flex>
                                    <Text textAlign="left" fontWeight="600" fontSize="16.4px" color="RGB(45, 45, 45)" fontFamily="Arial">Delivery</Text>
                                    <Text marginTop="15px" textAlign="left">Standard Delivery ($ 6.50)</Text>
                                    <Center height='25px'>
                                        <Divider orientation='horizontal' />
                                    </Center>
                                    <Button color="white" marginTop="20px" bg="rgb(1,136,73)" w="320px" onClick={() => navigate("/checkout")}>PLACE ORDER</Button>
                                </Box>
                            </div>
                        </div>
                    </Box>
            }
        </>
    )
} 