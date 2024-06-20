import { useForm } from "react-hook-form";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/login", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <Text color="red.500">{errors.email.message}</Text>}
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register("password", { required: "Password is required" })} />
            {errors.password && <Text color="red.500">{errors.password.message}</Text>}
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">Login</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;