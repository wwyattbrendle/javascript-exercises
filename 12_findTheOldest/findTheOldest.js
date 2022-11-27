const findTheOldest = function(array) {
    const today = new Date();
    for (let i = 0; i < array.length; i++) {
        if (!array[i].yearOfDeath) array[i].yearOfDeath = today.getFullYear();
    }

    array.sort((a, b) => (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) ? 1 : -1)

    return array[0];    
};

// Do not edit below this line
module.exports = findTheOldest;
