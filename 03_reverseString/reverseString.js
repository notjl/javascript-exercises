const reverseString = function(str) {
    let ret_str = "";
    let length = str.length
    for (let i = 1; i <= length; i++) {
        ret_str += str.at(0 - i)
    }

    /*
     * Intended algo is O(1)
     * return str.split("").reverse().join("")
     */

    // return ret_str
    return str.split("").reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
