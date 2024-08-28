// src/classes.ts
import { IProduct, ICustomer, IProductionProcess } from './interfaces';

// Implementazione della classe Product
export class Product implements IProduct {
    constructor(
        public type: string,
        public id: string,
        public size: string,
        public color: string,
        public status: 'available' | 'sold out' = 'available'
    ) {}

    assignToCustomer(customer: ICustomer): void {
        if (this.status === 'available') {
            this.status = 'sold out';
            console.log(`Product ${this.type} assigned to customer ${customer.firstName} ${customer.lastName}`);
        } else {
            console.log('Product is not available');
        }
    }
}

// Implementazione della classe Customer
export class Customer implements ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public preferredPaymentMethod: string
    ) {}

    orderProduct(product: IProduct): void {
        product.assignToCustomer(this);
    }
}

// Implementazione della classe ProductionProcess
export class ProductionProcess implements IProductionProcess {
    productsInProduction: IProduct[] = [];

    constructor(
        public name: string,
        public description: string
    ) {}

    addProduct(product: IProduct): void {
        this.productsInProduction.push(product);
        console.log(`Product ${product.type} added to the process ${this.name}`);
    }
}
