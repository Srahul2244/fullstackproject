import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';



export const Footer = () => {
    return (
        <Box border="1px solid cyan" marginTop="15%"
            width={{
                sm: '30em',
                md: '60em',
                lg: '70em',
                xl: '79em',
                '2xl': '95em',
            }}
            bg={useColorModeValue('gray.300', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text>Product</Text>
                        <Link href={'#'}>Overview</Link>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Link href={'#'}>Get to Know Us</Link>
                            <Tag
                                size={'sm'}
                                bg={useColorModeValue('green.300', 'green.800')}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag>
                        </Stack>
                        <Link href={'#'}> About Us</Link>
                        <Link href={'#'}> Careers</Link>
                        <Link href={'#'}> nrp Science</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text>  Make Money with Us</Text>
                        <Link href={'#'}>Press Releases</Link>
                        <Link href={'#'}>Sell under Nrp Accelerator</Link>
                        <Link href={'#'}>Protect and Build Your Brand</Link>
                        <Link href={'#'}>Become an Affiliate</Link>
                        <Link href={'#'}>Advertise Your Products</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text>Legal</Text>
                        <Link href={'#'}>Nrp Pay on Merchants</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Law Enforcement</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text>Follow Us</Text>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 NRP. All rights reserved
                </Text>
            </Box>
        </Box>
    );
}