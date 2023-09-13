const removeFromArray = function(arr, ...toDelete) {
    // Checks whether the element is included in the toDelete array
    // If it is, then it will be filtered.
    return arr.filter(elem => !toDelete.includes(elem))
};

// Do not edit below this line
module.exports = removeFromArray;
