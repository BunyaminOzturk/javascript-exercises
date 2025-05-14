const fibonacci = function(num) {
    let arr= [1,1];
    for(let i=1; i<=num+1; i++){
        arr.push(arr[i-1]+arr[i]);
    }
    //console.log(`${num}. eleman: ${arr[num-1]}`);
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
