import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useCartStore } from "../store/cart";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCartStore();

  if (cart.length === 0) {
    return (
      <VStack mt={10}>
        <Text fontSize="xl" fontWeight="bold">
          Your cart is empty 🛒
        </Text>
      </VStack>
    );
  }

  return (
    <VStack spacing={6} p={8} align="stretch">
      {cart.map((item) => (
        <Box key={item._id} p={4} shadow="md" borderRadius="md">
          <HStack spacing={4}>
            <Image
              src={item.image}
              alt={item.name}
              boxSize="80px"
              objectFit="cover"
            />

            <Box flex="1">
              <Text fontWeight="bold">{item.name}</Text>
              <Text>
                ₹{item.price} × {item.quantity}
              </Text>
            </Box>

            <Button
              size="sm"
              colorScheme="red"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </Button>
          </HStack>
        </Box>
      ))}

      <Divider />

      <Text fontSize="xl" fontWeight="bold">
        Total: ₹{totalPrice()}
      </Text>

      <Button colorScheme="green">Checkout</Button>

      <Button variant="ghost" onClick={clearCart}>
        Clear Cart
      </Button>
    </VStack>
  );
};

export default CartPage;
