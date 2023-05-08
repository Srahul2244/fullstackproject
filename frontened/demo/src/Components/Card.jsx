import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';


const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export const Card = () => {
    return (
        <Container maxW={'5xl'} py={12} >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Heading>ONLINE SHOPPING MADE EASY AT NRP</Heading>
                    <Text color={'gray.800'} fontSize={'lg'}>
                        If you would like to experience the best of online shopping for men, women and kids in India,
                        you are at the right place. Myntra is the ultimate destination for fashion and lifestyle,
                        being host to a wide array of merchandise including clothing, footwear, accessories, jewellery,
                        personal care products and more.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={"Mens Product"}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Womens Product'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.300', 'purple.900')}
                            text={'Books Product'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/11941640/2020/7/3/d60673d8-931d-456c-9090-fdf13c51cbfe1593775987595-Mast--Harbour-Women-Track-Pants-571593775985483-2.jpg'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container >
    );
}