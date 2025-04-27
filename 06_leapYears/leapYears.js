const leapYears = function(year) {
    let div100 = year%100 == 0;
    console.log(div100);
    
    let div400 = year%400 == 0;
    console.log(div400);
    
    let div4 = year%4 == 0;
    console.log(div4);
    
    if(div100 === true && div400 === false) return false;
    if(div400 === true) return true;
    if(div4 === true && div100 === false) {
      return true;
    } else {
      return false;
    }
  };

// Do not edit below this line
module.exports = leapYears;
