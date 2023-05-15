export interface ICustomerRepository<CustomerDTO>
{
    FindByID(id: any): Promise<CustomerDTO>
    Insert(c: CustomerDTO): void
    Update(c: CustomerDTO): void
    Save(c: CustomerDTO): void
    Delete(c: CustomerDTO): void
}