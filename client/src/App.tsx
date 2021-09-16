import React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Card from "./Components/Card";

import { Property, Field } from "../../common/types";

const BOARD: readonly Field[] = [];

const lmao = "2122121212212";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box>
                <Card property={{ color: "darkBlue", name: "Boardwalk", price: 100 }} />
            </Box>
        </ChakraProvider>
    );
};
