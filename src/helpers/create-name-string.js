// Creates a string for a tv name

function createNameString(bestSellingTv) {
    return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

export default createNameString;