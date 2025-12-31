import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const toast = useToast();
  const navigate = useNavigate();
  const { login, register, isLoading } = useAuthStore();

  const handleSubmit = async () => {
    let result;

    if (isLogin) {
      result = await login(form.email, form.password);
    } else {
      result = await register(form.name, form.email, form.password);
    }

    if (!result.success) {
      toast({
        title: "Error",
        description: result.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: isLogin ? "Logged in" : "Registered successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    if (isLogin) navigate("/");
    else setIsLogin(true);
  };

  return (
    <Box maxW="md" mx="auto" mt={20} p={6} shadow="md" borderRadius="md">
      <VStack spacing={4}>
        <Heading>{isLogin ? "Login" : "Register"}</Heading>

        {!isLogin && (
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        )}

        <Input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button
          colorScheme="teal"
          width="full"
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          {isLogin ? "Login" : "Register"}
        </Button>

        <Text cursor="pointer" color="teal.500" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </Text>
      </VStack>
    </Box>
  );
};

export default AuthPage;
