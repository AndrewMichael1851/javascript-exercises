const ftoc = function(inputFah) {
    let newCel = (inputFah - 32) / 1.8;
    newCel = Math.round(newCel * 10) / 10;
    return newCel;
};

const ctof = function(inputCel) {
    let newFah = (inputCel * 1.8) + 32;
    newFah = Math.round(newFah * 10) / 10;
    return newFah;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
