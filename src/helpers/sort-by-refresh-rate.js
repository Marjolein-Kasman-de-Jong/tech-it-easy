// Sorts tvs by refresh rate and logs them to the console

function sortByRefreshRate(inventory) {
    inventory.sort((a, b) => {
        return b.refreshRate - a.refreshRate;
    })

    inventory.map((item) => {
        console.log(item);
    })
}

export default sortByRefreshRate;