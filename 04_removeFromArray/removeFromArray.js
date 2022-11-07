const removeFromArray = function(startingArray, ...args) 
{
    for (let i = 0; i < startingArray.length; i++)
    {
        for (let j = 0; j < args.length; j++)
        {
            if (startingArray[i] === args[j])
            {
               startingArray.splice(i, 1);
               i--; 
            }
        }

    }

    return startingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
