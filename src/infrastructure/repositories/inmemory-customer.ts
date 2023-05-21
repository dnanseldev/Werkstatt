import { ICustomerRepository } from "../../application/repositories/customer-repository";
import { CustomerDTO } from "../../domain/entities/customer_aggregates/customer";

export class InMemoryCustommerRepository implements ICustomerRepository<CustomerDTO>
{
    customers: CustomerDTO[] = []

    
    async Create(item: CustomerDTO): Promise<void> {
        
       this.customers.push(item)
    }

    async Update(id: string, item: CustomerDTO): Promise<void> {
        
        this.customers.map( customer => customer.ID === id ? {...customer, item} : customer )   
    }

   async Delete(id: string): Promise<void> {
        
        const idx: number = this.customers.findIndex(obj => obj.ID === id)

        if (idx !== -1)
          this.customers.slice(idx, 1)
    }

   async Find(item: CustomerDTO): Promise<CustomerDTO[]> {
       
        return this.customers.filter(customer => customer.ID === item.ID)
   }

   async FindOne(id: string): Promise<CustomerDTO> {    
    
         return this.customers.find(customer => customer.ID === id)!  
    }
}