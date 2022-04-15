const palindromes = function (input) {
    input = input.toLowerCase().replace(/[^a-z]/g, "");
    let reverseString = [...input].reverse().join('');
    if (reverseString === input) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
