// Purpose: Interface for Biker data model
export interface Points {
    "id": number,
    "point": number,
    "bikerId": number,
    "biker": {
        "id": number,
        "name": string,
        "nationalId": number,
        "national" : {
            "id": number,
            "name": string
        }
    },
    "racesId": number,
    "races": {
        "id": number,
        "name": string
    }
}