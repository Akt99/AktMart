import { Box, Badge, Container, Flex, Heading, HStack, Text, useColorMode, Button, IconButton, useToast} from "@chakra-ui/react"
import { Link, replace, useNavigate } from "react-router-dom";  
import { PlusSquareIcon } from "@chakra-ui/icons";

import { useAuthStore } from "../store/auth";

import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../store/cart";


import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const { cartCount } = useCartStore();
  const itemCount = cartCount();
  const { user, logout } = useAuthStore();
  const toast = useToast();
  
  const handleLogout = () => {  
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out.",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    Navigate("/auth",{replace:true });
  };

  return (
  <Container maxW={"container.xl"}
    p={4}
    
    boxShadow={"md"}
    borderRadius={"md"}
    mb={10}
  >
    <Flex h={16} justifyContent={"space-between"} alignItems={"center"} flexDir={{base:"column", sm:"row"}}>
      {/*Logo*/}
      <Text 
      fontSize={{base:"22", sm: "28"}} 
      fontWeight={"bold"} 
      textTransform={"uppercase"}  
      textAlign={"center"} 
      bgGradient={"linear(to-r, teal.500, green.500)"} 
      bgClip={"text"}>
        <Link to={"/"}> AKT Mart 🛒 </Link>
      </Text>
      {/* Right actions */}
<HStack spacing={8} mt={{base:4, sm:0}}>
  {/*Create Product*/}
  <Link to={"/create"}>
  <Button leftIcon={<PlusSquareIcon />} colorScheme="teal">Create Product </Button> </Link>
  {/*Cart with badge*/}
  <Box position="relative">
            <IconButton
              as={Link}
              to="/cart"
              icon={<FaShoppingCart />}
              aria-label="Cart"
              variant="ghost"
              fontSize="22px"
            />

            {itemCount > 0 && (
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                bg="red.500"
                color="white"
                borderRadius="full"
                px={2}
                fontSize="0.7em"
              >
                {itemCount}
              </Badge>
            )}
          </Box>
          {/* Login / Logout */}
  {user ? (
    <Button colorScheme="red"  onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <Link to="/auth">
      <Button colorScheme="teal">Login</Button>
    </Link>
  )}
  <Button onClick= {toggleColorMode}>
    {colorMode === "light" ? <IoMoon/> : <LuSun size="20"/>} 
    </Button>
</HStack>
    </Flex>
    
  </Container>
  )}

export default Navbar