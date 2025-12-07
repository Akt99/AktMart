import { Box, Container, Flex, Heading, HStack, Text, useColorMode, Button} from "@chakra-ui/react"
import { Link } from "react-router-dom";  
import { PlusSquareIcon } from "@chakra-ui/icons";


import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  
  return <Container maxW={"container.xl"}
    p={4}
    
    boxShadow={"md"}
    borderRadius={"md"}
    mb={10}
  >
    <Flex h={16} justifyContent={"space-between"} alignItems={"center"} flexDir={{base:"column", sm:"row"}}>
      <Text 
      fontSize={{base:"22", sm: "28"}} 
      fontWeight={"bold"} 
      textTransform={"uppercase"}  
      textAlign={"center"} 
      bgGradient={"linear(to-r, teal.500, green.500)"} 
      bgClip={"text"}>
        <Link to={"/"}> AKT Mart 🛒 </Link>
      </Text>
<HStack spacing={8} mt={{base:4, sm:0}}>
  
  <Link to={"/create"}>Create Product 
  <Button> <PlusSquareIcon fontSize={20}/></Button> </Link>
  <Button onClick= {toggleColorMode}>
    {colorMode === "light" ? <IoMoon/> : <LuSun size="20"/>} 
    </Button>
</HStack>
    </Flex>
    
  </Container>
}

export default Navbar