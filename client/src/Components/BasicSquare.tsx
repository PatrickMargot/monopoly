import React, { FC } from "react"
import { Box, Flex, Spacer, Text, Icon, Square } from "@chakra-ui/react"
import { IconType } from "react-icons"

import { SQUARE_HEIGHT, SQUARE_WIDTH } from "../constants"

type BasicSquareProps = {
    name: string
    icon?: JSX.Element
    footer?: string
}

const BasicSquare: FC<BasicSquareProps> = ({ name, icon, footer }) => (
    <Flex
        direction="column"
        w={SQUARE_WIDTH}
        h={SQUARE_HEIGHT}
        p={2}
        bgColor="green.100"
        color="black"
        border="2px"
        borderColor="black"
        textAlign="center"
        alignItems="center"
    >
        <Text fontSize="sm">{name}</Text>
        <Spacer />
        {icon && (
            <Square size={SQUARE_WIDTH * 0.7}>
                <Square size="100%">{icon}</Square>
            </Square>
        )}
        <Spacer />
        {footer && <Text fontSize="sm">{footer}</Text>}
    </Flex>
)

export default BasicSquare
