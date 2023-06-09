import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  AddNewProduct,
  GetAllProduct,
} from "../../../Redux/admin/admin.actions";

const NewProductModal = ({
  isOpen,
  onClose,
  initialRef,
  value,
  showAddProduct,
}) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    title: "",
    category: "",
    mrp: "",
    price: 0,
    quantity: 1,
  });

  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value)
    setNewProduct({ newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newProduct.name === "" ||
      newProduct.image === "" ||
      newProduct.category === "" ||
      newProduct.price === 0
    ) {
      return toast({
        position: "top",
        title: "All the fields are required to proceed!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(AddNewProduct(newProduct)).then(() => dispatch(GetAllProduct()));
    toast({
      position: "top",
      title: "New Product has been added successfully.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    show(value);
  };

  const show = (value) => {
    showAddProduct(value);
    onClose();
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={() => show(value)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontSize={20} fontWeight={600}>
            Add a new Product
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name of Product</FormLabel>
              <Input
                ref={initialRef}
                placeholder="New Product Name"
                type="text"
                name="brand_name"
                value={newProduct.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image Url</FormLabel>
              <Input
                type="url"
                name="image_src"
                value={newProduct.image}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Product Description</FormLabel>
              <Input
                type="text"
                name="prod_desc"
                value={newProduct.title}
                onChange={handleChange}
              />
            </FormControl>

            <HStack w="full" mt={5}>
              <FormControl w="40%">
                <FormLabel>Category</FormLabel>
                <Input
                  name="category"
                  value={newProduct.category}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl w="60%">
                <FormLabel>mrp</FormLabel>
                <Input
                  type="text"
                  name="sub_category"
                  value={newProduct.mrp}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack w="full" justify="space-between" mt={5}>
              <FormControl>
                <FormLabel>Total Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Quantity of Product</FormLabel>
                <Input
                  type="number"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit} mr={3}>
              Save
            </Button>
            <Button onClick={() => show(value)} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewProductModal;