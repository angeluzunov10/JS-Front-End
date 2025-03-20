// function solve(initial, orders) {
//     let stock = new Map();

//     for (let i = 0; i < initial.length; i += 2){
//         let key = initial[i];
//         let value = Number(initial[i + 1]);

//         stock.set(key, value);
//     }

//     for (let i = 0; i < orders.length; i += 2){
//         let key = orders[i];
//         let value =  Number(orders[i + 1]);

//         if (!stock.has(key)){
//             stock.set(key, 0);
//         }

//         let current = stock.get(key);
//         stock.set(key, current + value);
//     }

//     for (let [product, quantity] of stock) {
//         console.log(`${product} -> ${quantity}`);
//     }
// }

function solve (initial, orders) {
    let inStock = {};

    let stock = initial.concat(orders);

    for (let i = 0; i < stock.length; i += 2){
        let product = stock[i];
        let quantity = stock[i + 1];

        if (!(product in inStock)){
            inStock[product] = 0;
        }

        inStock[product] += Number(quantity);
    }

    for (let provision in inStock) {
        console.log(`${provision} -> ${inStock[provision]}`);
    }
}

solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])