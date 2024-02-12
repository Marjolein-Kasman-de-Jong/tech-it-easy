// Sorts tvs by price and logs them to the console

function sortByPrice(inventory) {
    inventory.sort((a, b) => {
        return a.price - b.price;
    })

    inventory.map((item) => {
        console.log(item);
    })
}

export default sortByPrice;