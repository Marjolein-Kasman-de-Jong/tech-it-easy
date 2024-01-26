// Creates a string for a tv price

function createPriceString(bestSellingTv) {
    return `€${bestSellingTv.price},-`;
}

export default createPriceString;