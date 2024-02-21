'use client'

import { Flex, Stack, Heading, Button, Input, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaWandMagicSparkles } from "react-icons/fa6";
import FormField from "../components/FormField";
import Toggle from "../components/Toggle";

const loginSchema = yup.object({
  email: yup.string().required()
});
const LoginPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  return (
    <>
      <Toggle />
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <FaWandMagicSparkles size='120' color='0b64ea' />
          <Heading color="white.400">Sign in to account</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                boxShadow="md"
              >
                <FormField name="email" label='Email address' error={errors.email}>
                  <Input
                    borderRadius="15px"
                    fontSize="sm"
                    type="text"
                    color='0b64ea'
                    placeholder='raman@gmail.com'
                    size="lg"
                    id="email"
                    {...register("email")}
                  />
                </FormField>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

export default LoginPage