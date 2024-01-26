// Calculates the number of purchased tvs

import { inventory } from "../constants/inventory.js";

export function calculateNumberOfPurchasedTvs() {
    let numberOfTvs = 0;
    inventory.forEach(item => {
        numberOfTvs += item.originalStock;
        
    })
    return numberOfTvs;
}

console.log(calculateNumberOfPurchasedTvs())