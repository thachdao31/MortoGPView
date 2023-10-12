// Purpose: Interface for Biker data model
export interface Points {
    "id": number,
    "point": number,
    "bikerId": number,
    "racesId": number,
    "races": {
        "id": number,
        "name": string
    }
}