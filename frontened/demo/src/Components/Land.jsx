import {
    Flex,
    Spacer,
    Image,
    Text,
    Button,
    useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

const Services = () => {
    const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

    return (
        <Flex bg="yellow.100"
            width="full"
            minHeight="70vh"
            alignItems="center"
            px={isLargerThan62 ? '16' : '6'}
            py="16"
            justifyContent="center"
            flexDirection={isLargerThan62 ? 'row' : 'column'}
        >
            <Flex
                w={isLargerThan62 ? '40%' : 'full'}
                mb={isLargerThan62 ? '0' : '6'}
                alignItems="center"
                justifyContent="center"
            >

                <Image src="https://content.asos-media.com/-/media/homepages/ww/2023/january/30-prime/ww/moments/v-day-uk-us-au-apac-mena-row-roe-ie/jpeg/ww_4---v2.jpg" alt="NRP " w="full" />
            </Flex>

            <Spacer />

            <Flex
                w={isLargerThan62 ? '60%' : 'full'}
                flexDirection="column"
                ml={isLargerThan62 ? '7' : '0'}
            >
                <Text fontSize={isLargerThan62 ? '5xl' : '4xl'} fontWeight="bold">
                    Here you can saw  different Brands Products with valuable prize
                </Text>

                <Text mb="6" opacity="0.8">
                    This is the most amazing ecommerce platform
                </Text>

                <Button width="200px" size="lg" colorScheme="blue">
                    CONTACT US
                </Button>
            </Flex>
        </Flex>
    );
};

export default Services; 