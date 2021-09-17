import React from "react"
import { ChakraProvider, Icon, Box, Text, Link, VStack, Wrap, Code, Grid, GridItem, theme } from "@chakra-ui/react"
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

import { Property, Square } from "../../common/types"
import JailSquare from "./Components/JailSquare"

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
            return <BasicSquare name={square.name} icon={<Icon as={WiTrain} boxSize="110%" color="black" />} footer="$200" />

        case "chance":
            return (
                <BasicSquare
                    name="Chance"
                    icon={<Icon as={BsQuestion} boxSize="160%" color="pink.500" stroke="black" strokeWidth={0.25} strokeLinejoin="round" />}
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
                        <Icon as={GiLightBulb} h="90%" w="90%" color="yellow.300" stroke="black" strokeWidth={10} strokeLinejoin="round" />
                    }
                />
            )

        case "freeParking":
            return null

        case "goToJail":
            return null

        case "luxuryTax":
            return <BasicSquare name="Luxury Tax" footer="Pay $200" />
    }
}

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Grid h="200px" templateRows="repeat(11, 1fr)" templateColumns="repeat(11, 1fr)" gap={0}>
                {BOARD.map((square) => (
                    <GridItem bg="tomato">{mapSquare(square)}</GridItem>
                ))}
                <GridItem rowStart={2} rowSpan={9} colStart={2} colSpan={9} bg="red.400" />
            </Grid>
        </ChakraProvider>
    )
}
