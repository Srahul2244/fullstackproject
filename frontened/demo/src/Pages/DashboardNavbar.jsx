import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { ImUserPlus } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hamStyle = {
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
    backgroundColor: "#E6E6FA",
    padding: "0.5rem ",
    borderRadius: "0.4rem",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <Box width={{
      sm: '30em',
      md: '60em',
      lg: '70em',
      xl: '79em',
      '2xl': '95em',
    }}>
      <Flex justify="space-around" alignItems="center" bg="blue" p="0.5rem 0">
        <Link to="/dashboard">
          <Flex m="25px auto" style={hamStyle}>
            <ImUserPlus />
            <Text>NRP</Text>
          </Flex>
        </Link>

        <Flex
          display={["none", "none", "flex", "flex"]}
          justify="space-between"
          alignItems="center"
          gap="1.5rem"
        >
          <Link to="/dashboard">
            <Flex alignItems="center" gap="0.3rem">
              <AiFillHome color="white" />
              <Text color="white">Dashboard</Text>
            </Flex>
          </Link>

          <Link to={"/dashboard/adminProduct"}>
            <Flex alignItems="center" gap="0.3rem">
              <BsFillCartCheckFill color="white" />
              <Text color="white">Products</Text>
            </Flex>
          </Link>

          <Link to={"/dashboard/order"}>
            <Flex alignItems="center" gap="0.3rem">
              <MdProductionQuantityLimits color="white" />
              <Text color="white">Orders</Text>
            </Flex>
          </Link>

          <Link to={"/dashboard/user"}>
            <Flex alignItems="center" gap="0.3rem">
              <HiUserGroup color="white" />
              <Text color="white">Users</Text>
            </Flex>
          </Link>

          <Link to={"/dashboard/adminLogin"}>
            <Flex alignItems="center" gap="0.3rem">
              <ImUserPlus color="white" />
              <Text color="white">Add Admin</Text>
            </Flex>
          </Link>
        </Flex>

        <Box display={["inline-block", "inline-block", "none", "none"]}>
          <GiHamburgerMenu color="white" onClick={onOpen} size="1.5rem" />
        </Box>

        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Explore</DrawerHeader>
            <DrawerBody>
              <Link to="/dashboard">
                <Flex m="25px auto" style={hamStyle}>
                  <AiFillHome />
                  <Text>Dashboard</Text>
                </Flex>
              </Link>

              <Link to={"/dashboard/products"}>
                <Flex m="25px auto" style={hamStyle}>
                  <BsFillCartCheckFill />
                  <Text>Products</Text>
                </Flex>
              </Link>

              <Flex m="25px auto" style={hamStyle}>
                <MdProductionQuantityLimits />
                <Text>Orders</Text>
              </Flex>
              <Link to={"dashboard/user"}>
                <Flex m="25px auto" style={hamStyle}>
                  <HiUserGroup />
                  <Text>Users</Text>
                </Flex>
              </Link>

              <Link to="/dashboard/adminlogin">
                <Flex m="25px auto" style={hamStyle}>
                  <ImUserPlus />
                  <Text>Add Admin</Text>
                </Flex>
              </Link>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
