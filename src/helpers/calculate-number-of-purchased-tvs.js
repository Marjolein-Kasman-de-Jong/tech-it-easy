// Calculates the number of purchased tvs

function calculateNumberOfPurchasedTvs(inventory) {
    let numberOfTvs = 0;
    inventory.forEach(item => {
        numberOfTvs += item.originalStock;
    })
    return numberOfTvs;
}

export default calculateNumberOfPurchasedTvs