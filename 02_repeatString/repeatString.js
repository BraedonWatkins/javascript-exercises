const repeatString = function(inStr, n) {
    
    if(typeof(inStr) !== 'string'){return "ERROR";}
    if(n < 0) {return "ERROR";}
    
    retStr = '';

    for (i = 0; i < n; i++)
    {
        retStr += inStr;
    }

    return retStr;
};

// Do not edit below this line
module.exports = repeatString;
