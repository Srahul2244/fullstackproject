import { Navigate } from 'react-router-dom';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
// import { Search } from './Search';
import { BsCart } from "react-icons/bs"
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCount } from '../Redux/action';
import { useEffect } from 'react';

const item = ["Home", "Mens", "Womens", "kids", "Mobiles", "books", "Electronics", "Beauty"]
export const Nav = () => {
    const { isOpen, onToggle } = useDisclosure();
    const dispatch = useDispatch()
    const count = useSelector((store) => store.productReducer.count)
    const token = useSelector((store) => store.authReducer.token)

    useEffect(() => {
        if (token) {
            dispatch(getCount(token))
        }
    }, [count, getCount])
    console.log(count)
    return (
        <Box border="1px" width={{
            sm: '30em',
            md: '60em',
            lg: '70em',
            xl: '79em',
            '2xl': '95em',
        }}>
            <Flex bg="#f6d8ac"
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text style={{ backgroundColor: "#f6d8ac", color: "brown", borderRadius: "10px", padding: "1px" }}
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')} >
                        NRP
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'/login'}>
                        Sign In
                    </Button>

                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontWeight={600}
                        fontSize={'sm'}
                        color={'white'}
                        bg={'pink.400'}
                        href={'/register'}>
                        Sign Up
                    </Button>

                    <Button as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontWeight={600}
                        fontSize={'sm'}
                        color={'black'}
                        href={'/cart'}>
                        <BsCart />
                        {count}
                    </Button>

                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {item.map((navItem, i) => (
                <Box key={i}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem == "Home" ? "/" : `/products/${navItem}`}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem}
                            </Link>
                        </PopoverTrigger>

                    </Popover>
                </Box>

            ))}
            {/* .......................... */}
        </Stack>
    );
};

const DesktopSubNav = ({ props }) => {
    return (
        <Link
            href={"#"}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {props}
                    </Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {item.map((navItem, i) => (
                <MobileNavItem key={i} props={navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ props, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Flex
                py={2}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>

                <Link
                    p={2}
                    href={props == "Home" ? "/" : `/products/${props}`}
                    fontSize={'sm'}
                    fontWeight={500}
                >
                    {props}
                </Link>


            </Flex>

        </Stack>
    );
};