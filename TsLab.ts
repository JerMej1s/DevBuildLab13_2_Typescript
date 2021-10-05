// Tallest Mountain

interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: 'Killmanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
]

function findNameOfTallestMountain(allMountains: Mountain[]): string {
    let tallestHeight: number = 0;
    let resultTallest: string = '';

    for (let i = 0; i < allMountains.length; i++) {
        if (allMountains[i].height > tallestHeight) {
            tallestHeight = allMountains[i].height;
            resultTallest = allMountains[i].name;
        }
    }

    return resultTallest;
}

let tallest: string = findNameOfTallestMountain(mountains);
console.log(tallest);

// Products

interface Product {
    name: string;
    price: number;
}


let products: Product[] = [
    { name: 'rent', price: 900 },
    { name: 'insurance', price: 20.94 },
    { name: 'water', price: 65.00 },
    { name: 'dte', price: 75.00 },
    { name: 'consumers', price: 100.00 },
    { name: 'internet', price: 55.00 }
]

function calcAverageProductPrice(products: Product[]): number {
    let sum: number = 0;

    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }

    let resultAvg: number = sum / products.length;

    return resultAvg;
}

let average: number = calcAverageProductPrice(products);
console.log(average);

// Inventory

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
]

function calcInventoryValue(allInventory: InventoryItem[]): number {
    let itemValue: number = 0;
    let resultSum: number = 0;

    for ( let i = 0; i < allInventory.length; i++) {
        itemValue = allInventory[i].product.price * allInventory[i].quantity;
        resultSum += itemValue;
    }

    return resultSum;
}

let sum: number = calcInventoryValue(inventory);
console.log(sum);