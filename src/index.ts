import { Product, Customer, ProductionProcess, delay } from './classes';

async function run() {
    // Products to be produced

    // Relax Line
    const ChillWaveBikini = new Product('ChillWave Bikini', 'Relax', '1', 'M', 'Blue');
    const SunsetSarong = new Product('Sunset Sarong', 'Relax', '2', 'One Size', 'Red');
    const BeachComberShorts = new Product('Beach Comber Shorts', 'Relax', '3', 'L', 'Beige');
    const PalmBreezeTankTop = new Product('Palm Breeze Tank Top', 'Relax', '4', 'S', 'Green');
    const CoastalWrap = new Product('Coastal Wrap', 'Relax', '5', 'One Size', 'Turquoise');

    // Active Line
    const WaveRiderSwimTrunks = new Product('Wave Rider Swim Trunks', 'Active', '6', 'M', 'Navy Blue');
    const ReefExplorerBikini = new Product('Reef Explorer Bikini', 'Active', '7', 'S', 'Coral Pink');
    const TidalForceOnePiece = new Product('Tidal Force One-Piece', 'Active', '8', 'L', 'Black');
    const SurfStrideBoardShorts = new Product('Surf Stride Board Shorts', 'Active', '9', 'XL', 'Gray');
    const OceanPulseRashGuard = new Product('Ocean Pulse Rash Guard', 'Active', '10', 'M', 'White');

    // Extreme Line
    const StormSurgeWetsuit = new Product('Storm Surge Wetsuit', 'Extreme', '11', 'L', 'Dark Gray');
    const HighTideDrySuit = new Product('High Tide Dry Suit', 'Extreme', '12', 'XL', 'Black');
    const RipCurrentRashVest = new Product('Rip Current Rash Vest', 'Extreme', '13', 'M', 'Red');
    const CycloneSwimCap = new Product('Cyclone Swim Cap', 'Extreme', '14', 'One Size', 'Yellow');
    const AbyssDiverFullSuit = new Product('Abyss Diver Full Suit', 'Extreme', '15', 'S', 'Navy Blue');

    // Creating customers
    const customerMario = new Customer('Mario', 'Rossi', 'mario.rossi@email.com', 'Credit Card');
    const customerGiulia = new Customer('Giulia', 'Bianchi', 'giulia.bianchi@email.com', 'Credit Card');

    // Creating a production process
    const process1 = new ProductionProcess('SUNNEE Summer 2024 Collection', 'Our company is committed to sustainability. We create our swimwear using recycled materials, aiming to provide stylish options while caring for the environment.', ['Relax', 'Active', 'Extreme']);


    // OUTPUT
    // Log campaign details
    await process1.logCampaignDetails();

    // Adding products to the production process
    await process1.addProduct(WaveRiderSwimTrunks);
    await delay(2000);

    await process1.addProduct(StormSurgeWetsuit);
    await delay(2000);


    // List of avaible products
    await console.log('Products available in the production process:');
    await delay(2000);

    await process1.productsInProduction.forEach(product => {
        console.log(`${product.line} ${product.type} (Size: ${product.size}, Color: ${product.color})`);
    });
    await delay(2000)



    // Customer orders an available product
    await customerMario.orderProduct(WaveRiderSwimTrunks);
    await delay(4000)

    // Customer orders a not available product
    //await customerGiulia.orderProduct(SunsetSarong);
    //await delay (4000);
    }

run();
