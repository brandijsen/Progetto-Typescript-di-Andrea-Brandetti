// src/index.ts
import { Product, Customer, ProductionProcess } from './classes';

// Creating some products
const swimsuit = new Product('Swimsuit', '1', 'M', 'Blue');
const sarong = new Product('Sarong', '2', 'One Size', 'Red');

// Creating a customer
const customer1 = new Customer('Mario', 'Rossi', 'mario.rossi@email.com', 'Credit Card');

// Creating a production process
const process1 = new ProductionProcess('Summer 2024 Production', 'Sustainable production for the 2024 summer line');

// Adding products to the production process
process1.addProduct(swimsuit);
process1.addProduct(sarong);

// Customer orders a product
customer1.orderProduct(swimsuit);

// Check the product status
console.log(`Product status of ${swimsuit.type}: ${swimsuit.status}`);
