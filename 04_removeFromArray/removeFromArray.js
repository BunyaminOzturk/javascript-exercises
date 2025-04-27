const removeFromArray = function(ary, num) {
    indexNum = ary.indexOf(num);
    ary.splice(indexNum, 1);
    return ary;
};

// Do not edit below this line
module.exports = removeFromArray;
