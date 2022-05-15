const removeFromArray = function() {
    inArr = arguments[0];

    for(j = 1; j < arguments.length; j++)
    {
        for(i = 0; i < inArr.length; i++)
        {
            if(inArr[i] === arguments[j]) {inArr.splice(i,1);}
        }        
    }

    return inArr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
