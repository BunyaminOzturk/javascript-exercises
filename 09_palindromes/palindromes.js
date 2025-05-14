const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z]/g, '');
    let reverseStr = str.split("").reverse().join("");
    if(str === reverseStr){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
