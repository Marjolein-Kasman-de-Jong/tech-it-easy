// Calculates the number of sold tvs

function calculateNumberOfSoldTvs(inventory) {
    let numberOfTvs = 0;
    inventory.forEach(item => {
        numberOfTvs += item.sold;
    })
    return numberOfTvs;
}

export default calculateNumberOfSoldTvs