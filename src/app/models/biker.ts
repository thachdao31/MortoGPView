// Purpose: Interface for Biker data model
export interface Biker {
    "id": number,
    "name": string,
    "nationalId": number,
    "national" : {
        "id": number,
        "name": string
    }
}