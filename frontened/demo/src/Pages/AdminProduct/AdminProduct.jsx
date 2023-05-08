import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  HStack,
  Icon,
  useDisclosure,
  Button,
  Select,
  IconButton,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import Navbar from "../DashboardNavbar";
import { BiShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
 import ShowProductModal from "./Modals/ShowProductModal"
import { BiDownArrowAlt } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";
import { RiFilterLine } from "react-icons/ri";
import NewProductModal from "./Modals/NewProductModal";
import EditProductModal from "./Modals/EditProductModal";
import DeleteProductModal from "./Modals/DeleteProductModal";
import { GetProducts } from "../../Redux/admin/admin.actions";
import { GetSingleProduct } from "../../Redux/admin/admin.actions";
import { useSelector } from "react-redux"



const AdminProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sortBy, setSortBy] = useState("asc")
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  const token = useSelector((store) => store.authReducer.token)
  const products = useSelector((store) => store.admin.product)
  console.log(products)
  console.log(token)

  //AddProduct modal
  const [addProduct, setAddProduct] = useState(false);
  const showAddProduct = (value, id) => {
    setAddProduct(!value);
    onOpen();
  };

  //EditProduct modal
  const [editProduct, setEditProduct] = useState(false);
  const showEditProduct = (value) => {
    setTimeout(() => {
      setEditProduct(!value);
      onOpen();
    }, 100);
  };

  //SingleProductModal
  const [singleProduct, setSingleProduct] = useState(false);
  const showSingleProduct = (value) => {
    setTimeout(() => {
      setSingleProduct(!value);
      onOpen();
    }, 200);
  };

  //Delete ProductModal
  const [deleteProduct, setDeleteProduct] = useState(false);
  const showDeleteProduct = (value) => {
    setTimeout(() => {
      setDeleteProduct(!value);
      onOpen();
    }, 200);
  };

  //To set and change the limits
  const [limit, setLimit] = useState(15);
  const newLimit = (value) => {
    setLimit(value);
  };

  //To set pages and change it
  const [page, setPage] = useState(1);
  const currentPage = (value) => {
    setPage(value);
  };

  //to sort by price
  const [price, setPrice] = useState("asc");
  const sortPrice = (value) => {
    value === "asc" ? setPrice("desc") : setPrice("asc");
  };

  //to sort by quantity
  const [quantity, setQuantity] = useState("asc");
  const sortQuantity = (value) => {
    value === "asc" ? setQuantity("desc") : setQuantity("asc");
  };

  //to filter by product name
  const [productName, setProductName] = useState(false);
  const filterProduct = (value) => {
    setProductName(!value);
  };

  //to filter by category
  const [category, setCategory] = useState(false);
  const filterCategory = (value) => {
    setCategory(!value);
    isOpen();
  };

  const initialRef = React.useRef(null);
  const cancelRef = React.useRef();




  useEffect(() => {

    const payload = {
      token: token,
      sortBy: price,
      limit: limit
    }
    dispatch(GetProducts(payload))

  }, [dispatch])

  console.log(products)


  return (
    <>
      <Navbar />

      <HStack w={"90%"} m="auto" justifyContent={"space-between"} mt={8} mb={8}>
        <Text fontWeight={600} fontSize="2rem">
          All Products
        </Text>
        <Button
          variant="outline"
          bg={"teal.200"}
          colorScheme="black"
          onClick={() => {
            showAddProduct(addProduct);
          }}
        >
          Add New Product
        </Button>
      </HStack>

      {addProduct && (
        <NewProductModal
          isOpen={isOpen}
          onClose={onClose}
          initialRef={initialRef}
          value={addProduct}
          showAddProduct={showAddProduct}
        />
      )}

      <TableContainer w="90%" h="450px" overflowY="scroll" margin={"auto"}>
        <Table variant="striped" colorScheme="teal">
          <Thead bg={"black"}>
            <Tr>
              <Th color="white">Product ID</Th>

              <Th color="white">
                <HStack spacing={-1}>
                  <Text>Product Name</Text>
                  <IconButton
                    icon={<RiFilterLine size={20} color="white" />}
                    variant="ghost"
                    size="sm"
                    _hover="none"
                    onClick={() => {
                      filterProduct(productName);
                    }}
                  />
                </HStack>
              </Th>

              <Th color="white">
                <HStack spacing={-1}>
                  <Text>Category</Text>
                  <IconButton
                    icon={<RiFilterLine size={20} color="white" />}
                    variant="ghost"
                    size="sm"
                    _hover="none"
                    onClick={() => {
                      filterCategory(category);
                    }}
                  />
                </HStack>
              </Th>

              <Th color="white">
                <HStack spacing={-1}>
                  <Text>Price</Text>
                  <IconButton
                    icon={
                      price === "asc" ? (
                        <BsArrowUpShort size={20} color="white" />
                      ) : (
                        <BiDownArrowAlt size={20} color="white" />
                      )
                    }
                    variant="ghost"
                    size="sm"
                    _hover="none"
                    onClick={() => {
                      sortPrice(price);
                    }}
                  />
                </HStack>
              </Th>



              <Th color="white">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.length > 0 &&
              products?.map((elem) => (
                <Tr key={elem._id}>
                  <Td>{elem._id}</Td>
                  <Td>
                    <Text>{elem.title.split(" ")[0]} {elem.title.split(" ")[1]}  {elem.title.split(" ")[2]}
                    </Text>
                  </Td>
                  <Td>
                    <Text>{elem.category}</Text>
                  </Td>

                  <Td>
                    <Text>₹{elem.price}</Text>
                  </Td>

                  <Td>
                    <HStack>
                      <Icon
                        as={BiShow}
                        color="blue"
                        cursor="pointer"
                        size={18}
                        onClick={() => {
                          dispatch(GetSingleProduct(elem._id));
                          setTimeout(
                            () => showSingleProduct(singleProduct),
                            300
                          );
                        }}
                      />
                      <Icon
                        as={GrEdit}
                        cursor={"pointer"}
                        onClick={() => {
                          dispatch(GetSingleProduct(elem._id));
                          setTimeout(() => showEditProduct(editProduct), 300);
                        }}
                      />

                      <Icon
                        as={MdDeleteOutline}
                        color="red"
                        fontSize={18}
                        cursor={"pointer"}
                        onClick={() => {
                          dispatch(GetSingleProduct(elem._id));
                          setTimeout(
                            () => showDeleteProduct(deleteProduct),
                            300
                          );
                        }}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      {editProduct && (
        <EditProductModal
          isOpen={isOpen}
          onClose={onClose}
          initialRef={initialRef}
          value={editProduct}
          showEditProduct={showEditProduct}
          limit={limit}
          page={page}
        />
      )}
      {singleProduct && (
        <ShowProductModal
          isOpen={isOpen}
          onClose={onClose}
          value={singleProduct}
          showSingleProduct={showSingleProduct}
        />
      )}

      {deleteProduct && (
        <DeleteProductModal
          isOpen={isOpen}
          onClose={onClose}
          cancelRef={cancelRef}
          value={deleteProduct}
          showDeleteProduct={showDeleteProduct}
          limit={limit}
          page={page}
        />
      )}

      <HStack
        w="90%"
        height="40px"
        bg="black"
        m="auto"
        mt={5}
        p={"4px 25px"}
        justifyContent="flex-end"
        spacing={6}
      >
        <HStack>
          <Text color="white">Rows per page</Text>
          <Select
            color="black"
            w="75px"
            h="90%"
            bg="white"
            defaultValue={limit}
            onChange={(e) => newLimit(e.target.value)}
          >
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </Select>
        </HStack>


      </HStack>
    </>
  );
};

export default AdminProduct;
