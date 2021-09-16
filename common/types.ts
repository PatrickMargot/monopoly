export type Color = "brown" | "lightBlue" | "pink" | "orange" | "red" | "yellow" | "green" | "darkBlue"

export type Go = {
    type: "go"
}

export type Property = {
    type: "property"
    name: string
    price: number
    color: Color
}

export type CommunityChest = {
    type: "communityChest"
}

export type IncomeTax = {
    type: "incomeTax"
}

export type Railroad = {
    type: "railroad"
    name: string
}

export type Chance = {
    type: "chance"
}

export type Jail = {
    type: "jail"
}

export type Utility = {
    type: "utility"
    // name: "Electric Company" | "Water Works"
    name: string
}

export type FreeParking = {
    type: "freeParking"
}

export type GoToJail = {
    type: "goToJail"
}

export type LuxuryTax = {
    type: "luxuryTax"
}

export type Square = Go | Property | CommunityChest | IncomeTax | Railroad | Chance | Jail | Utility | FreeParking | GoToJail | LuxuryTax
