import { CustomerDTO } from "../../domain/entities/customer_aggregates/customer";
import { ICustomerRepository } from "../repositories/customer-repository";

export class AttendantUseCase {

    cdto: CustomerDTO

    constructor(cdto: CustomerDTO) {
        this.cdto = cdto
    }

    saveCustomer(cr: ICustomerRepository<CustomerDTO>): void {
        cr.Save(this.cdto)
    }
}