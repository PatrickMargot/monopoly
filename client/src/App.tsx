import React from "react"
import {
    ChakraProvider,
    Icon,
    Box,
    Text,
    Link,
    VStack,
    Wrap,
    Code,
    Grid,
    GridItem,
    theme,
    HStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import GoSquare from "./Components/GoSquare"
import PropertySquare from "./Components/PropertySquare"
import BasicSquare from "./Components/BasicSquare"

import { GiOpenTreasureChest, GiLightBulb } from "react-icons/gi"
import { FaQuestion } from "react-icons/fa"
import {} from "react-icons/ri"
import { AiOutlineQuestion } from "react-icons/ai"
import { BsQuestion } from "react-icons/bs"
import { WiTrain } from "react-icons/wi"

import { chunk, range } from "lodash"

import { Property, Square } from "../../common/types"
import JailSquare from "./Components/JailSquare"
import { SQUARE_HEIGHT, SQUARE_WIDTH } from "./constants"

const BOARD: readonly Square[] = [
    { type: "go" },
    { type: "property", name: "Mediterranean Avenue", price: 100, color: "brown" },
    { type: "communityChest" },
    { type: "property", name: "Baltic Avenue", price: 100, color: "brown" },
    { type: "incomeTax" },
    { type: "railroad", name: "Reading Railroad" },
    { type: "property", name: "Oriental Avenue", price: 100, color: "lightBlue" },
    { type: "chance" },
    { type: "property", name: "Vermont Avenue", price: 100, color: "lightBlue" },
    { type: "property", name: "Connecticut Avenue", price: 100, color: "lightBlue" },
    { type: "jail" },
    { type: "property", name: "St. Charles Place", price: 100, color: "pink" },
    { type: "utility", name: "Electric Company" },
    { type: "property", name: "States Avenue", price: 100, color: "pink" },
    { type: "property", name: "Virginia Avenue", price: 100, color: "pink" },
    { type: "railroad", name: "Pennsylvania Railroad" },
    { type: "property", name: "St. James Place", price: 100, color: "orange" },
    { type: "communityChest" },
    { type: "property", name: "Tennessee Avenue", price: 100, color: "orange" },
    { type: "property", name: "New York Avenue", price: 100, color: "orange" },
    { type: "freeParking" },
    { type: "property", name: "Kentucky Avenue", price: 100, color: "red" },
    { type: "chance" },
    { type: "property", name: "Indiana Avenue", price: 100, color: "red" },
    { type: "property", name: "Illinois Avenue", price: 100, color: "red" },
    { type: "railroad", name: "B. & O. Railroad" },
    { type: "property", name: "Atlantic Avenue", price: 100, color: "yellow" },
    { type: "property", name: "Ventnor Avenue", price: 100, color: "yellow" },
    { type: "utility", name: "Water Works" },
    { type: "property", name: "Marvin Gardens", price: 100, color: "yellow" },
    { type: "goToJail" },
    { type: "property", name: "Pacific Avenue", price: 100, color: "green" },
    { type: "property", name: "North Carolina Avenue", price: 100, color: "green" },
    { type: "communityChest" },
    { type: "property", name: "Pennsylvania Avenue", price: 100, color: "green" },
    { type: "railroad", name: "Short Line" },
    { type: "chance" },
    { type: "property", name: "Park Place", price: 100, color: "darkBlue" },
    { type: "luxuryTax" },
    { type: "property", name: "Boardwalk", price: 100, color: "darkBlue" },
]

const BOARD_CORNERS: readonly Square[] = BOARD.filter(
    ({ type }) => type === "go" || type === "jail" || type === "freeParking" || type === "goToJail",
)

const BOARD_SIDES: readonly Square[][] = chunk(
    BOARD.filter(({ type }) => type !== "go" && type !== "jail" && type !== "freeParking" && type !== "goToJail"),
    9,
)

function mapSquare(square: Square) {
    switch (square.type) {
        case "go":
            return <GoSquare />

        case "property":
            return <PropertySquare property={square} />

        case "communityChest":
            return (
                <BasicSquare
                    name="Community Chest"
                    icon={
                        <Icon
                            as={GiOpenTreasureChest}
                            boxSize="100%"
                            color="cyan.500"
                            stroke="black"
                            strokeWidth={7}
                            strokeLinejoin="round"
                        />
                    }
                />
            )

        case "incomeTax":
            return <BasicSquare name="Income Tax" footer="Pay $200" />

        case "railroad":
            return (
                <BasicSquare
                    name={square.name}
                    icon={<Icon as={WiTrain} boxSize="110%" color="black" />}
                    footer="$200"
                />
            )

        case "chance":
            return (
                <BasicSquare
                    name="Chance"
                    icon={
                        <Icon
                            as={BsQuestion}
                            boxSize="160%"
                            color="pink.500"
                            stroke="black"
                            strokeWidth={0.25}
                            strokeLinejoin="round"
                        />
                    }
                />
            )

        case "jail":
            return <JailSquare />

        case "utility":
            return (
                <BasicSquare
                    name={square.name}
                    footer="$200"
                    icon={
                        <Icon
                            as={GiLightBulb}
                            h="90%"
                            w="90%"
                            color="yellow.300"
                            stroke="black"
                            strokeWidth={10}
                            strokeLinejoin="round"
                        />
                    }
                />
            )

        case "freeParking":
            return <div>freeParking</div>

        case "goToJail":
            return <div>goToJail</div>

        case "luxuryTax":
            return <BasicSquare name="Luxury Tax" footer="Pay $200" />
    }
}

console.log(BOARD_CORNERS, BOARD_SIDES)

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Grid
                templateRows={`${SQUARE_HEIGHT}px ${SQUARE_WIDTH * 9}px ${SQUARE_HEIGHT}px`}
                templateColumns={`${SQUARE_HEIGHT}px ${SQUARE_WIDTH * 9}px ${SQUARE_HEIGHT}px`}
            >
                {/* {[2, 3, 1, 0].map((index) => (
                    <>
                        <GridItem bg="green">{mapSquare(BOARD_CORNERS[index])}</GridItem>
                        <GridItem bg="tomato">
                            <HStack>
                                {BOARD_SIDES[index].map((sideSquare) => (
                                    <Box transform={`rotate(${90 * 0}deg)`}>{mapSquare(sideSquare)}</Box>
                                ))}
                            </HStack>
                        </GridItem>
                    </>
                ))} */}
                <GridItem>{mapSquare(BOARD_CORNERS[2])}</GridItem>
                <GridItem>
                    <HStack spacing={0}>
                        {BOARD_SIDES[2].map((sideSquare) => (
                            <Box transform={`rotate(${180}deg)`}>{mapSquare(sideSquare)}</Box>
                        ))}
                    </HStack>
                </GridItem>
                <GridItem>{mapSquare(BOARD_CORNERS[3])}</GridItem>
                <GridItem>
                    <VStack spacing={0}>
                        {BOARD_SIDES[1].map((sideSquare) => (
                            <Box
                                transform={`rotate(${90}deg)`}
                                transformOrigin="50% 75%"
                                h={SQUARE_WIDTH}
                                w={SQUARE_HEIGHT}
                            >
                                {mapSquare(sideSquare)}
                            </Box>
                        ))}
                    </VStack>
                </GridItem>
                <GridItem bgColor="green.100">middle</GridItem>
                <GridItem bg="tomato">
                    <VStack spacing={0}>
                        {BOARD_SIDES[3].map((sideSquare) => (
                            <Box
                                transform={`rotate(${-90}deg) translateX(-66.6666666666%)`}
                                transformOrigin="top left"
                                h={SQUARE_WIDTH}
                                w={SQUARE_HEIGHT}
                            >
                                {mapSquare(sideSquare)}
                            </Box>
                        ))}
                    </VStack>
                </GridItem>
                <GridItem bg="green">{mapSquare(BOARD_CORNERS[1])}</GridItem>
                <GridItem bg="tomato">
                    <HStack spacing={0}>{BOARD_SIDES[0].map(mapSquare)}</HStack>
                </GridItem>
                <GridItem bg="green">{mapSquare(BOARD_CORNERS[0])}</GridItem>
            </Grid>
        </ChakraProvider>
    )
}
