export interface IProduct {
    type: string;
    line: string;
    id: string;
    size: string;
    color: string;
    status: 'available' | 'not available';
    assignToCustomer(customer: ICustomer): Promise<void>;
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
    lines: string[];
    productsInProduction: IProduct[];
    addProduct(product: IProduct): Promise<void>;
}
