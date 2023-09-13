const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    let sum = 0;
    if (a > b) {
        [b, a] = [a, b];
    }
    for (; a <= b; a++) {
        sum += a;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
