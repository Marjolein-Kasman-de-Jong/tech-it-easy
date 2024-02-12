// Creates a string for available screen sizes

function createScreenSizeString(bestSellingTv) {
    let screenSizeString = '';
    bestSellingTv.availableSizes.forEach(item => {
        const screenSizeCm = Math.round(item * 2.54);
        screenSizeString += `${item.toString()} inch (${screenSizeCm} cm)`;
        if (bestSellingTv.availableSizes.indexOf(item) < bestSellingTv.availableSizes.length - 1) {
            screenSizeString += ' | ';
        }
    })

    return `${screenSizeString}`;
}

export default createScreenSizeString;