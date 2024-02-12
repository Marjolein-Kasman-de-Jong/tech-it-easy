import { inventory } from './inventory.js';

// Opdracht 1A

inventory.map(tv => console.log(`${tv.type} ${tv.name}`))

// Opdracht 1B

console.log(inventory.filter(tv => (tv.originalStock - tv.sold) === 0));

//  Opdracht 1C

console.log(inventory.find(tv => tv.type === 'NH3216SMART'));

//  Opdracht 1D

inventory.map(tv => {
    const currentTv = {
        name: tv.name,
        suitable: tv.refreshRate >= 100
    };
    console.log(currentTv);
})

// Opdracht 1E

const largeTvs = inventory.filter(tv => {
    return tv.availableSizes.some(size => {
        return size >= 65});
})

largeTvs.map(tv => console.log(tv))

// Opdracht 1F

const ambiLightTvs = inventory.filter(tv => {
    return tv.options.find(option => {
        return option.name === 'ambiLight' && option.applicable === true;
    })
})

ambiLightTvs.map(tv => console.log(tv))