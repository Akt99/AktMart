import { Container, Text, VStack, Link, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard.jsx';
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();}, [fetchProducts]);
    console.log("products", products);

  
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text fontSize={"3xl"} fontWeight={"bold"} bgGradient={"linear(to-r, cyan.400, blue.500"} bgClip={"text"} textAlign={"center"}>
          Current Products 📦
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            )
            )}
          </SimpleGrid>
          {products.length === 0 &&(<VStack spacing={3} py={10}>
          <Text fontSize={"xl"} textAlign={"center"} fontWeight="bold" color ="gray.500">
            No Products Available. Please{" "} <Link href='/create' color={"teal.500"} _hover={{ textDecoration: "underline" }}> Create </Link> a new product 
            </Text>
            </VStack>
          )}
      </VStack>
          
    </Container>
  )
}

export default HomePage