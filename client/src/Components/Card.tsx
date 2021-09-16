import React, { FC } from "react"
import { ChakraProvider, Box, Center, Text, Link, VStack, Code, Grid, Flex, Spacer } from "@chakra-ui/react"

import { Property, Field } from "../../../common/types"

type CardProps = {
    property: Property
}
const hello = ""

const Card: FC<CardProps> = ({ property: { color, name, price } }) => (
    <Flex w={100} h={150} direction="column">
        <Box h="25%" bgColor={color} border="2px" borderColor="black" />
        <Flex
            direction="column"
            h="75%"
            p="2"
            bgColor="green.100"
            color="black"
            border="2px"
            borderTop="0px"
            borderColor="black"
            textAlign="center"
        >
            <Box>{name}</Box>
            <Spacer />
            <Box>${price}</Box>
        </Flex>
    </Flex>
)

export default Card
