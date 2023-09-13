const repeatString = function(str, num) {
    let ret_str = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        ret_str += str;
    }
    return ret_str;
};

// Do not edit below this line
module.exports = repeatString;
