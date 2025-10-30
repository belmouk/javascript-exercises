const fibonacci = function(num) {
    num = Number(num);

    if (isNaN(num) || num < 0){
        return "OOPS";
    } else if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        const sequence = [1, 1];

        for (let i = 1; i < (num - 1); i++) {
            const fibonacciTerm = sequence[i] + sequence[i-1];
            sequence.push(fibonacciTerm);
        }
        return sequence.at(-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
