import {
    Box,
    Button,
    Flex,
    Image,
    Spacer,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

const Landing = () => {
    const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

    return (
        <Flex bg="blue.100"
            alignItems="center"
            w="full"
            px={isLargerThan62 ? '16' : '6'}
            py="16"
            minHeight="90vh"
            justifyContent="space-between"
            flexDirection={isLargerThan62 ? 'row' : 'column'}
        >
            <Box mr={isLargerThan62 ? '6' : '0'} w={isLargerThan62 ? '60%' : 'full'}>
                <Text
                    fontSize={isLargerThan62 ? '5xl' : '4xl'}
                    fontWeight="bold"
                    mb="4"
                >
                    {' '}
                    Home to the best up-and-coming independent brands and vintage boutiques from around the world.
                </Text>

                <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7}>
                    Lets Buy Product On most Efficient E-commerce named NRP .One of the Top Best e-commerce website in India.
                </Text>

                <Button
                    w="200px"
                    colorScheme="blue"
                    variant="solid"
                    h="50px"
                    size={isLargerThan62 ? 'lg' : 'md'}
                    mb={isLargerThan62 ? '0' : '10'}
                >
                    Buy
                </Button>
            </Box>

            <Spacer />

            <Flex
                w={isLargerThan62 ? '40%' : 'full'}
                alignItems="center"
                justifyContent="center"
            >
                <Image src="https://content.asos-media.com/-/media/homepages/ww/2023/january/30-prime/ww/moments/v-day-uk-us-au-apac-mena-row-roe-ie/jpeg/ww_2_denim-used-this-one---v2.jpg" alt="Chakra UI" />
            </Flex>
        </Flex>
    );
};

export { Landing };