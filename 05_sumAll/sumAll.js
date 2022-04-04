const sumAll = function(...inputArguments) {

    if (Number.isInteger(inputArguments[0]) && inputArguments[0] > 0 && Number.isInteger(inputArguments[1]) && inputArguments[1] > 0) {
        let highNumber = Math.max(inputArguments[0], inputArguments[1]);
        let lowNumber = Math.min(inputArguments[0], inputArguments[1]);

        let sumNumber = 0;

        for (var i = lowNumber; i <= highNumber; i++) {
            sumNumber = sumNumber + i;
        }

        return sumNumber;
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
