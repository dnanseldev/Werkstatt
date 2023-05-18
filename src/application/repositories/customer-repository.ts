export interface ICustomerRepository<CustomerDTO>
{
    Create(item: CustomerDTO): Promise<boolean> 
    Update(id: string, item: CustomerDTO): Promise<boolean> 
    Delete(id: string): Promise<boolean> 
    Find(item: CustomerDTO): Promise<CustomerDTO[]> 
    FindOne(id: string): Promise<CustomerDTO>
}