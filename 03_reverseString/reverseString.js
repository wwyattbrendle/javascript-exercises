const reverseString = function(string) 
{
    const array = [];

    for (let i = 0; i < string.length; i++)
    {
        array[i] = string.charAt(i); 
    }

    array.reverse();
    let result = array.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
