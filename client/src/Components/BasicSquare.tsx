import React, { FC } from "react"
import { Box, Flex, Spacer, Text } from "@chakra-ui/react"

type BasicSquareProps = {
    name: string
    price?: number
    pay?: boolean
}

const BasicSquare: FC<BasicSquareProps> = ({ name, price, pay = false }) => (
    <Flex direction="column" w={100} h={150} p={2} bgColor="green.100" color="black" border="2px" borderColor="black" textAlign="center">
        <Text fontSize="sm">{name}</Text>
        <Spacer />
        {price && (
            <Text fontSize="sm">
                {pay && "Pay"} ${price}
            </Text>
        )}
    </Flex>
)

export default BasicSquare
