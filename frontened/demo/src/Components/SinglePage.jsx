import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../Redux/action'
import "./Singlepage.css"
// import { Box, Button, Flex, Input, Stack } from '@chakra-ui/react';
import { ProductDetails } from './ProductDetalis';
import axios from 'axios';

const SinglePage = () => {
    const token = useSelector((store) => store.authReducer.token)
    const { id } = useParams()
    console.log(id)
    const [current, setCurrent] = React.useState({});







    React.useEffect(() => {
        axios.get(`https://relieved-earmuffs-colt.cyclic.app/product/single/${id}`, { headers: { authorization: token } })
            .then((r) => {
                // console.log(r)
                setCurrent(r.data.data)
                console.log(current)
            }).catch((r) => {
                console.log(r)
            })


    }, [])





    return (
        <>
            <ProductDetails
                payload={current}
                image={current.image}
                title={current.title}
                category={current.category}
                price={current.price}
                rating={current.rating}
            />

        </>


    )
}

export default SinglePage


