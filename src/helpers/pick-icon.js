// Picks an icon

function pickIcon(tv, feature, checkIcon, minIcon) {
    if (tv.options.find(option => {
        return option.name === feature && option.applicable;
    })) {
        return checkIcon;
    } else {
        return minIcon;
    }
}

export default pickIcon;