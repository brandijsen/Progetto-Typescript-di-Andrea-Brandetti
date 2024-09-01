import { IProduct, ICustomer, IProductionProcess } from './interfaces';

// Function to introduce a delay
export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Implementation of the Product class
export class Product implements IProduct {
    constructor(
        public type: string,
        public line: string,
        public id: string,
        public size: string,
        public color: string,
        public status: 'available' | 'not available' = 'not available'
    ) {}

    async assignToCustomer(customer: ICustomer): Promise<void> {
        if (this.status === 'available') {
            console.log(`Customer ${customer.firstName} ${customer.lastName} (Email: ${customer.email}) chose: ${this.line} ${this.type} id: ${this.id} (Size: ${this.size}, Color: ${this.color})`);
            await delay(4000);

            console.log(`Product ${this.line} ${this.type} (Size: ${this.size}, Color: ${this.color}) is available`);
            await delay(4000);

            console.log(`${customer.firstName} ${customer.lastName} selected ${customer.preferredPaymentMethod} as payment method`);
            await delay(4000);

            console.log(`The purchase was completed successfully`);
        } else {
            console.log(`Customer ${customer.firstName} ${customer.lastName} (Email: ${customer.email}) chose: ${this.line} ${this.type} (Size: ${this.size}, Color: ${this.color})`);
            await delay(4000);

            console.log(`${this.line} ${this.type} (Size: ${this.size}, Color: ${this.color}) is not available`);
            await delay(4000);
        }
    }
}

// Implementation of the Customer class
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

// Implementation of the ProductionProcess class
export class ProductionProcess implements IProductionProcess {
    productsInProduction: IProduct[] = [];

    constructor(
        public name: string,
        public description: string,
        public lines: string[]
    ) {}

    async logCampaignDetails(): Promise<void> {
        console.log(`${this.name}`);
        await delay(2000);
        console.log(`${this.description}`);
        await delay(2000);
        console.log(`With the ${this.name} we offer something for everyone—men, women, athletes, and casual beachgoers—through our ${this.lines.join(', ')} swimwear lines`);
        await delay(2000);
    }

    async addProduct(product: IProduct): Promise<void> {
        this.productsInProduction.push(product);
        product.status = 'available'; // Set the product status to 'available'
        console.log(`${product.line} ${product.type} added to the process ${this.name}`);
        await delay(2000);
    }
}
