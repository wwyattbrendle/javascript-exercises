const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    const numbers = [];
    for(let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            numbers[i] = 1;
            continue;
        }

        numbers[i] = numbers[i - 1] + numbers[i - 2];
    }

    return numbers[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
