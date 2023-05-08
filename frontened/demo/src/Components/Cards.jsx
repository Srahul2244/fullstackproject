import { Button, ButtonGroup, CardFooter, Divider, Flex, Heading, Stack, Card, CardBody, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Cards = () => {
    return (
        <Flex direction={{ base: 'column', sm: 'row', md: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.asos-media.com/products/pullbear-high-neck-sleeveless-midaxi-dress-in-grey/204404377-2?$n_480w$&wid=476&fit=constrain'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </CardBody>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.asos-media.com/products/topshop-cassie-nylon-crossbody-bag-in-blue/204055752-2?$n_480w$&wid=476&fit=constrain'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </CardBody>
            </Card>
            <Card maxW='sm'>

                <CardBody>
                    <Image
                        src='https://images.asos-media.com/products/converse-run-star-hike-hi-trainers-in-black/201219936-2?$n_480w$&wid=476&fit=constrain'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </CardBody>
            </Card>
            <Card maxW='sm'>

                <CardBody>
                    <Image
                        src='https://images.asos-media.com/products/asos-design-knitted-mini-dress-with-button-through-detail-in-taupe/202721956-2?$n_480w$&wid=476&fit=constrain'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />

                </CardBody>
            </Card>
        </Flex>
    )
}

export default Cards