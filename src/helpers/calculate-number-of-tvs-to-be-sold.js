// Calculates the number of tvs to be sold

import { calculateNumberOfPurchasedTvs } from "./calculate-number-of-purchased-tvs.js" 
import { calculateNumberOfSoldTvs } from "./calculate-number-of-sold-tvs.js";

export function calculateNumberOfTvsToBeSold() {
    const numberOfPurchasedTvs = calculateNumberOfPurchasedTvs()
    const numberOfSoldTvs = calculateNumberOfSoldTvs()
    return numberOfPurchasedTvs - numberOfSoldTvs
}

console.log(calculateNumberOfTvsToBeSold())