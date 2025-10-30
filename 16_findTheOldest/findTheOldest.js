const findTheOldest = function(arr) {
    const sortedArr = arr.toSorted( (a, b) => {
        const aLife = a.yearOfDeath? (a.yearOfDeath - a.yearOfBirth) : (2025 - a.yearOfBirth);
        const bLife = b.yearOfDeath? (b.yearOfDeath - b.yearOfBirth) : (2025 - b.yearOfBirth);

        return bLife - aLife;
    });
    return sortedArr.at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
