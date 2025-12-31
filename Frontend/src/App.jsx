import { Button, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom"; 
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import CartPage from "./pages/CartPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";  
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
   
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900") }>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<ProtectedRoute>
              <CreatePage />
            </ProtectedRoute> } />
        <Route path="/cart" element={<ProtectedRoute>
              <CartPage />
            </ProtectedRoute> } /> 
        <Route path="/auth" element={<AuthPage/> } />
      </Routes>
    </Box>
  );
}

export default App;
