const repeatString = function(inputString, repeatNum) {
    let testString = '';

    if (repeatNum < 0) {
        return 'ERROR'
    } else if (inputString === '') {
        return '';
    } else {
        for (var i = 0; i < repeatNum; i++) {
            testString = testString + 'hey';
        }
        return testString;
    }
};

// Do not edit below this line
module.exports = repeatString;
