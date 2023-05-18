 interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
  }

 interface IWrite<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
  }

  export abstract class BaseRepository<T>
  {
      abstract create(item: T): Promise<boolean> 

      abstract update(id: string, item: T): Promise<boolean> 

      abstract delete(id: string): Promise<boolean> 

      abstract find(item: T): Promise<T[]> 

      abstract findOne(id: string): Promise<T> 
  }