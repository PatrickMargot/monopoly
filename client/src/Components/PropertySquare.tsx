import React, { FC } from "react"
import { ChakraProvider, Box, Center, Text, Link, VStack, Code, Grid, Flex, Spacer, Heading } from "@chakra-ui/react"

import { Property, Color } from "../../../common/types"

const COLOR_MAP: Readonly<{ [key in Color]: string }> = {
    brown: "orange.800",
    lightBlue: "blue.200",
    pink: "pink.500",
    orange: "orange.400",
    red: "red.500",
    yellow: "yellow.300",
    green: "green.500",
    darkBlue: "blue.600",
}

type PropertySquareProps = {
    property: Property
}

const PropertySquare: FC<PropertySquareProps> = ({ property: { color, name, price } }) => (
    <Flex w={100} h={150} direction="column">
        <Box h="25%" bgColor={COLOR_MAP[color]} border="2px" borderColor="black" />
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
            <Text fontSize="sm">{name}</Text>
            <Spacer />
            <Text fontSize="sm">${price}</Text>
        </Flex>
    </Flex>
)

export default PropertySquare
