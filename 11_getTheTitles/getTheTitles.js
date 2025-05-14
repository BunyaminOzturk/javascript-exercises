const getTheTitles = function(books) {
    let arr = [];
    books.forEach(value => {
        console.log(value.title);
        arr.push(value.title);
    })
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
