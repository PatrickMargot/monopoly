import React, { FC } from "react"
import { Box, Square, Icon, Flex, Text, Grid, GridItem, Spacer, Heading, Center } from "@chakra-ui/react"

import { CgArrowLongLeftL } from "react-icons/cg"

const PropertySquare: FC = () => (
    <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        w={150}
        h={150}
        p={2}
        bgColor="green.100"
        color="black"
        border="2px"
        textAlign="center"
    >
        <Heading as="h6" size="xs">
            Collect
            <br />
            $200 Salary
            <br />
            As You Pass
        </Heading>
        <Heading as="h2" size="xl">
            GO
        </Heading>
        <Center h={50} w="100%">
            <Icon as={CgArrowLongLeftL} boxSize="160%" color="red.600" stroke="black" strokeWidth={0.5} strokeLinejoin="round" />
        </Center>
    </Flex>
)

export default PropertySquare
