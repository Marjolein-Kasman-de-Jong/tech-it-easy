// Calculates the number of tvs to be sold

import  calculateNumberOfPurchasedTvs  from "./calculate-number-of-purchased-tvs.js" 
import  calculateNumberOfSoldTvs  from "./calculate-number-of-sold-tvs.js";

function calculateNumberOfTvsToBeSold(inventory) {
    const numberOfPurchasedTvs = calculateNumberOfPurchasedTvs(inventory)
    const numberOfSoldTvs = calculateNumberOfSoldTvs(inventory)
    return numberOfPurchasedTvs - numberOfSoldTvs
}

export default calculateNumberOfTvsToBeSold