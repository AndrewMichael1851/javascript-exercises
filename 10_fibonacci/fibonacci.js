const fibonacci = function(index) {
    index = parseInt(index);
    if (index < 0) return 'ERROR';
    if (index === 0) return 0;

    let fibStartA = 0;
    let fibStartB = 1;
    for (let i = 0; i < index - 1; i++) {
        const temp = fibStartB;
        fibStartB = fibStartA + fibStartB;
        fibStartA = temp;
    };
    return fibStartB;
};

// Do not edit below this line
module.exports = fibonacci;
