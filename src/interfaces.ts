// src/interfaces.ts

export interface IProduct {
    type: string;  // Swimsuit, Sarong, Hat
    id: string;
    size: string;
    color: string;
    status: 'available' | 'sold out';
    assignToCustomer(customer: ICustomer): void;
}

export interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    preferredPaymentMethod: string;
    orderProduct(product: IProduct): void;
}

export interface IProductionProcess {
    name: string;
    description: string;
    productsInProduction: IProduct[];
    addProduct(product: IProduct): void;
}
