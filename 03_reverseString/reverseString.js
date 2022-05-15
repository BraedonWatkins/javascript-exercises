const reverseString = function(inStr) {
    retStr = '';

    for(i = inStr.length - 1; i >= 0; i--){ retStr += inStr[i]; }

    return retStr;
};

// Do not edit below this line
module.exports = reverseString;
