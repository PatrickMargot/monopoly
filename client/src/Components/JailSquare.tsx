import React, { FC } from "react"
import { Box, Square, Icon, Flex, Text, Grid, GridItem, Heading, Center } from "@chakra-ui/react"

import { GiPrisoner, GiImprisoned } from "react-icons/gi"

const JailSquare: FC = () => (
    <Grid templateRows="75% 25%" templateColumns="25% 75%" w={150} h={150} bgColor="green.100" color="black" border="2px" textAlign="right">
        <Center>
            <Text fontSize="sm" transform="rotate(90deg)">
                Just
            </Text>
        </Center>
        <Flex direction="column" bgColor="orange.400" borderLeft="2px" borderBottom="2px" alignItems="center" justifyContent="center">
            <Heading as="h6" size="xs">
                In
            </Heading>
            <Icon as={GiPrisoner} h="50%" w="50%" border="2px" bgColor="white" />
            <Heading as="h6" size="xs">
                Jail
            </Heading>
        </Flex>
        <Box />
        <Center>
            <Text fontSize="sm">Visiting</Text>
        </Center>
    </Grid>
)

export default JailSquare
