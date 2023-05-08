import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Select,
    Toast,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { MdLocalShipping } from 'react-icons/md';
// import ReactImageMagnify from 'react-image-magnify';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ProductDetails = ({ image, price, category, title, rating, payload }) => {
    const token = useSelector((store) => store.authReducer.token)
    const [qty, setQty] = useState(1)
    const Navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()



    const data = {
        title: payload.title,
        category: payload.category,
        price: payload.price,
        image: payload.image,
        rating: payload.rating,
        mrp: payload.mrp,
        quantity: qty,
        refId: payload._id
    }

    const addCart = () => {

        setIsLoading(true)
        axios.post('https://relieved-earmuffs-colt.cyclic.app/cart', data, { headers: { authorization: token } })
            .then((r) => {
                console.log(r)
                setIsLoading(false)
                Navigate('/cart')

            }).catch((e) => {
                console.log(e)
                toast({
                    title: " Please SignUp first",
                    description: "SignUp first",
                    status: "info",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                })
            })


    }


    return (
        <Container maxW={'5xl'} border="1px solid blue" boxShadow="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;">
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex gap="50px" >
                    <Image src={image} />
                    {/* <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: image,
                            width: "500px"

                        },
                        enlargedImageContainerDimensions: {
                            width: '200px', height: '200px'
                        },
                        largeImage: {
                            src: image,
                            width: 1200,
                            height: 1800
                        }
                    }}>
                    </ReactImageMagnify> */}
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '2xl', lg: '2xl' }}>
                            {title}
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'1xl'}>
                            {rating}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <Box>
                            <Text
                                fontSize={{ base: '14px', lg: '14px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Product Details
                            </Text>

                            <List spacing={2} textAlign="left"
                            >
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'} >
                                        {category}
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Flex width="200px" gap="20px">
                                        <Text fontWeight="bold">Quantity</Text>
                                        <Select width="80px" value={qty} onChange={(e) => setQty(e.target.value)}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                        </Select>
                                    </Flex>

                                </ListItem>

                                <ListItem>

                                    <Text as={'span'} fontWeight={'bold'}>
                                        Rs {''}{price}
                                    </Text>
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    <Button onClick={addCart}
                        isLoading={isLoading}
                        rounded={'10px'}
                        base={'sm'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('gray.900', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container >
    );
}