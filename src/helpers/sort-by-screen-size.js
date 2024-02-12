// Sorts tvs by screen size and logs them to the console

function sortByScreenSize(inventory) {
    inventory.sort((a, b) => {
        return b.availableSizes.slice(-1) - a.availableSizes.slice(-1);
    })

    inventory.map((item) => {
        console.log(item);
    })
}

export default sortByScreenSize;