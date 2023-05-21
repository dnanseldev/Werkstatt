export interface ICustomerRepository<CustomerDTO>
{
    Create(item: CustomerDTO): Promise<void> 
    Update(id: string, item: CustomerDTO): Promise<void> 
    Delete(id: string): Promise<void> 
    Find(item: CustomerDTO): Promise<CustomerDTO[]> 
    FindOne(id: string): Promise<CustomerDTO>
}