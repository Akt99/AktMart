import React from 'react';
import { Box, Button, Image, Text, VStack, Heading, HStack, useToast, Modal, Input, ModalOverlay, ModalCloseButton, ModalBody, ModalFooter, ModalContent, ModalHeader, useDisclosure } from '@chakra-ui/react';
import { useColorModeValue, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useProductStore } from '../store/product';
import { useCartStore } from "../store/cart";


const ProductCard = ({product}) => {
    const [quantity, setQuantity] = React.useState(1);
    const { addToCart } = useCartStore();
    const textColor= useColorModeValue("gray.800", "whiteAlpha.900");
    const bg= useColorModeValue("white", "gray.800");
    const {deleteProduct, updateProduct}=useProductStore()
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updatedProduct, setUpdatedProduct]= React.useState({
  name: product.name,
  price: product.price,
  image: product.image,
});

const isValidImageUrl = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};


  const [isUpdating, setIsUpdating] = React.useState(false);


    const handleDeleteProduct = async(pid) => {
        const {success, message}= await deleteProduct(pid)
        if(!success){
          toast({
            title:"Error",
            description: message,
            status:"error",
            duration:7500,
            isClosable:true,
           // position:"top"
          })
        } else{
          toast({
            title:"Success",
            description: message,
            status:"success",
            duration:7500,
            isClosable:true
          })
          
        }
    }
    
    const handleUpdateProduct = async (pid, updatedProduct) => {
  // basic validation (UX polish)
  if (!updatedProduct.name || !updatedProduct.price || !updatedProduct.image) {
    toast({
      title: "Validation Error",
      description: "All fields are required",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
    return;
  }
  if (Number(updatedProduct.price) <= 0) {
    toast({
      title: "Invalid Price",
      description: "Price must be greater than 0",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
    return;
  }

  if (!isValidImageUrl(updatedProduct.image)) {
    toast({
      title: "Invalid Image URL",
      description: "Please enter a valid image URL",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
    return;
  }

  const { success, message } = await updateProduct(pid, updatedProduct);

  if (!success) {
    toast({
      title: "Error",
      description: message,
      status: "error",
      duration: 7500,
      isClosable: true,
    });
    return; // ❗ do NOT close modal on failure
  }

  toast({
    title: "Success",
    description: message, // backend message
    status: "success",
    duration: 7500,
    isClosable: true,
  });

  onClose(); // ✅ close only on success
};

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s "
      
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" fallbackSrc="https://via.placeholder.com/300x200?text=No+Image"/>
        <Box p={6}>
          <Heading as="h3" size="md" mb={2}>

            {product.name}      
            </Heading>

            
            {/*Product Price */ }
            <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
                ₹{product.price}
                </Text>
                {/*Product Quantity Controls */ }
                <HStack mt={2} mb={4} spacing={4} alignItems="center">
                <Button
                        size="sm"
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
                                <Text>{quantity}</Text>                                              
                                                          
                                                          

                                    

                                    <Button size="sm"  onClick={() => setQuantity(q => q + 1)}>+</Button>
                                          
                </HStack>
                             {     /* Add to Cart Button */   }
                                                                    
  <Button                                                    
  colorScheme="teal"
  width="half"
  mb={4}
  onClick={() => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} item(s) added`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }}
>
  Add to Cart
</Button>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} colorScheme='teal' onClick={onOpen} />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' />
                </HStack>
        </Box>

        {/*Edit Modal */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit/Update Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Input placeholder='Product Name' value={updatedProduct.name}  name ='name'
                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}/>
                <Input placeholder='Product Price' name= 'price' type='number' 
                onChange={(e) => setUpdatedProduct({...updatedProduct, price: Number(e.target.value)})}/>
                <Input placeholder='Product Image URL' name='image' 
                onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}   />
              </VStack>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='red' onClick={onClose} mr={3} >
              {/*onClick={()=> handleUpdateProduct(product._id, updatedProduct)}*/}
                Cancel
              </Button>
              <Button variant='ghost' colorScheme='teal' onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Save Changes</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  )
}

export default ProductCard