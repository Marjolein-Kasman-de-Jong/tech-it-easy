// Sorts tvs by number sold and logs them to the console

function sortByNumberSold(inventory) {
    inventory.sort((a, b) => {
        return b.sold - a.sold;
    })

    inventory.map((item) => {
        console.log(item);
    })
}

export default sortByNumberSold;