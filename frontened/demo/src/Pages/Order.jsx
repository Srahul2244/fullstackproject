import { TableContainer, Table, Tr, Thead, Th, HStack, Text, Td, Tbody } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from "../../src/Pages/DashboardNavbar";

const Order = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://relieved-earmuffs-colt.cyclic.app/product/order/order")
            .then((res) => {
                setData(res.data)
            }).catch((e) => {
                console.log(e)
            })
    }, [])





    return (
        <>
            <Navbar />
            <TableContainer w="90%" h="450px" overflowY="scroll" margin={"auto"}>
                <Table variant="striped" colorScheme="teal">
                    <Thead bg={"black"}>
                        <Tr>
                            <Th color="white">Product ID</Th>
                            <Th color="white">
                                <HStack spacing={-1}>
                                    <Text>Title</Text>
                                </HStack>
                            </Th>

                            <Th color="white">
                                <HStack spacing={-1}>
                                    <Text>Price</Text>
                                </HStack>
                            </Th>



                            <Th color="white">Quantity</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.length > 0 &&
                            data?.map((elem) => (
                                <Tr key={elem._id}>
                                    <Td>{elem._id}</Td>
                                    <Td>
                                        <Text>{elem.title.split(" ")[0]} {elem.title.split(" ")[1]}  {elem.title.split(" ")[2]}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text>{elem.price}</Text>
                                    </Td>

                                    <Td>
                                        <Text>₹{elem.quantity}</Text>
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Order