import { TEntity } from "../interfaces/base-entity";

export type CustomerDTO = {
    ID: any;
    name: string;
    lastName: string;
    documentID: string;
    phoneNumber: string;
    userID: any;
}

export class Customer extends TEntity {
    
    cdto: CustomerDTO

    constructor( cdto: CustomerDTO ) {
        super()
        this.cdto = cdto
    }

    public static isvalidName(pName: string): boolean
    {       
        const re = /^[\w\s]+$/g    
        return re.exec(pName) && pName.length >= 3 ? true : false
    }

    public static isvalidlastName(pLastName: string): boolean
    {       
        const re = /^[\w\s]+$/g    
        return re.exec(pLastName) && pLastName.length >= 3 ? true : false
    }

    public static isValidDocumentID(pDocumentID): boolean
    {
        const re = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/g    
        return re.exec(pDocumentID) ? true : false
    }

    public static isValidPhoneNumber(pPhoneNumber): boolean
    {
        const re = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/g    
        return re.exec(pPhoneNumber) ? true : false
    }

    get customerInfo(): string {
        return `ID: ${this.EntityID} Name: ${this.cdto.name} Last name: ${this.cdto.lastName} CPF: ${this.cdto.documentID} Celular: ${this.cdto.phoneNumber}`
    }
}