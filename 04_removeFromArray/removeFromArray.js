const removeFromArray = function(...inputArgument) {
    let inputArray = inputArgument[0];
    let newArray = [];

    inputArray.forEach((item) => {
        if (!inputArgument.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
