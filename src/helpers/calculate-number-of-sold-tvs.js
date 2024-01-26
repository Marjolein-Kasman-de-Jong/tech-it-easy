// Calculates the number of sold tvs

import { inventory } from "../constants/inventory.js";

export function calculateNumberOfSoldTvs() {
    let numberOfTvs = 0;
    inventory.forEach(item => {
        numberOfTvs += item.sold;
        
    })
    return numberOfTvs;
}

console.log(calculateNumberOfSoldTvs())