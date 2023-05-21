import { TEntity } from "../interfaces/base-entity";

export type CustomerDTO = {
    ID: string;
    name: string;
    lastName: string;
    documentID: string;
    phoneNumber: string;
    userID: string;
}

export class Customer extends TEntity {
    
    cdto: CustomerDTO

    constructor( cdto: CustomerDTO ) {
        super()
        this.cdto = cdto
    }

    public static isvalidName(name: string): boolean
    {       
        const re = /^[\w\s]+$/g    
        return re.exec(name) && name.length >= 3 ? true : false
    }

    public static isvalidlastName(lastName: string): boolean
    {       
        const re = /^[\w\s]+$/g    
        return re.exec(lastName) && lastName.length >= 3 ? true : false
    }

    public static isValidDocumentID(documentID: string): boolean
    {
        const re = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/g    
        return re.exec(documentID) ? true : false
    }

    public static isValidPhoneNumber(phoneNumber: string): boolean
    {
        const re = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/g    
        return re.exec(phoneNumber) ? true : false
    }

    get customerInfo(): string {
        return `ID: ${this.EntityID} Name: ${this.cdto.name} Last name: ${this.cdto.lastName} CPF: ${this.cdto.documentID} Celular: ${this.cdto.phoneNumber}`
    }
}