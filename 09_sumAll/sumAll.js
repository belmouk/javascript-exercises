const sumAll = function(num1, num2) {
    
    if (( num1 < 0 || num2 < 0 || Math.floor(num1) !== num1 || Math.floor(num2) !== num2 )) {
        return "ERROR";
    } else {
        const max = num1 > num2 ? num1 : num2;
        const min = num1 + num2 - max;
        const arrayToSum = [];
        for (let i = min; i <= max; i++) {
            arrayToSum.push(i);
        }
        return arrayToSum.reduce( (sum, num) => sum +num, 0);
    }
    
};

// Do not edit below this line
module.exports = sumAll;
