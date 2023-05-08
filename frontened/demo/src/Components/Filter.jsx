import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Flex, Grid, Select, Spacer, Text, boxShadow, border, borderColor, borderRadius } from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getProduct } from '../Redux/action';
const Filter = ({ path, page }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [price, setPrice] = React.useState(searchParams.get("price") || "")
    const [sortBy, setSortBy] = React.useState(searchParams.get("sortBy") || "")
    const location = useLocation()
    const dispatch = useDispatch()




    useEffect(() => {
        const params = {}
        price && (params.price = price)
        sortBy && (params.sortBy = sortBy)
        page && (params.page = page)
        setSearchParams(params)
    }, [price, sortBy])




    return (
        <>
            <Box color="secondary" borderColor='blue.200' width="40%" marginLeft="85px" w={{
                base: "50%",
                sm: "40%",
                md: "30%",
                xl: "80%",
                "2xl": "20%",

            }} marginTop="70px">
                <Flex wrap="wrap" gap="20px" variant="outlined">
                    <Select onChange={(e) => setSortBy(e.target.value)} border="2px" w="100px" variant='solid' placeholder="Sort" borderRadius="20px">
                        <option value="desc" name="sortBy">Price high to low</option>
                        <option value="asc" name="sortBy">Price low to high</option>
                    </Select>
                    <RadioGroup value={price} onChange={(e) => setPrice(e)}>
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='red' value='0-2000' >
                                0-2000
                            </Radio>
                            <Radio colorScheme='green' value='2000-5000'>
                                2000-5000
                            </Radio>
                            <Radio colorScheme='green' value='5000-10000'>
                                5000-10000
                            </Radio>
                            <Radio colorScheme='green' value='10000-200000'>
                                10000-200000
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </Flex>
            </Box>
        </>
    )
}

export default Filter
