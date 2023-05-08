import { color, HStack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Box, Button, Text, } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"
import ReactStarsRating from 'react-awesome-stars-rating';
import axios from 'axios'
import styles from "./product.module.css";
import { getCount, getProduct } from "../Redux/action"
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Filter from "./Filter";
import { borderRadius } from "@mui/system";


const ProductPage = ({ path }) => {
    const toast = useToast()
    const [page, setPage] = useState(1)
    const token = useSelector((store) => store.authReducer.token)
    // console.log(token)
    const product = useSelector((store) => store.productReducer.product)
    console.log(product)
    const isError = useSelector((store) => store.productReducer.isError)
    const loading = useSelector((store) => store.productReducer.isLoading)
    // console.log(product)
    const dispatch = useDispatch()
    const location = useLocation()

    // console.log(location)
    const count = useSelector((store) => store.productReducer.count)

    useEffect(() => {
        if (token) {
            dispatch(getCount(token))
        }
    }, [count])

    useEffect(() => {

        const payload = {
            path: path,
            token: token,
            query: location.search,
            page: page,
        }
        dispatch(getProduct(payload))
    }, [dispatch, location.search, page])



    return (

        <>

            {
                loading ? <Box>loading...</Box> :
                    <div className={styles.products}>
                        <div className={styles.flexRahul}>
                            <div><Filter path={path} page={page} /></div>
                        </div>
                        <div className={styles.product}>
                            {product.length && product.map((ele) =>
                            (
                                <Box key={ele._id} borderRadius="10px" padding="20px" borderColor='red.200' gap="20px" border="1px solid cyan">
                                    <Link to={`/product/${ele._id}`}><img style={{ margin: "auto", height: "50%" }} src={ele.image} alt="" /></Link>
                                    <Text className={styles.titlename} color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left" marginTop="80px">{ele.title}</Text>
                                    <HStack marginTop="30px"> <Text color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left" >{ele.rating} </Text>
                                        <ReactStarsRating
                                            count={5}
                                            value={ele.rating}
                                            size={14}
                                            color2={'#ffd700'}
                                            isEdit={false}
                                            className={styles.stars}
                                            isHalf={false}

                                        /></HStack>
                                    <Text marginTop="10px" color="black" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="16px" textAlign="left">{ele.category}</Text>
                                    <div className={styles.add}>
                                        <div>
                                            <Text marginTop="10px" color="black" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="17px" textAlign="left">Rs{ele.price}</Text>
                                        </div>
                                        <div>
                                            <Link to={`single/${ele._id}`}><Button onClick={() =>
                                                toast({
                                                    title: "Added to Details Page.",
                                                    description: "Data has been added to the  View details Page",
                                                    status: "info",
                                                    duration: 1000,
                                                    isClosable: true,
                                                    position: "top",
                                                })
                                            } border="solid" variant="outlined" bg="blue" color="white" marginLeft="100px">View Details</Button></Link>
                                        </div>

                                    </div>
                                </Box>
                            )
                            )}

                        </div>

                    </div>
            }
            <div className={styles.page}>
                <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>prev</Button>
                <h1 style={{ width: "70px", borderRadius: "40px", backgroundColor: "yellowgreen", color: "black", textAlign: "center" }}>{page}</h1>
                <Button onClick={() => setPage(page + 1)}>next</Button>
            </div>

        </>

    )
}

export { ProductPage }