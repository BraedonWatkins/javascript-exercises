const sumAll = function() {    
    let int1 = arguments[0];
    let int2 = arguments[1];
    let larger,smaller = 0;

    if(int1 < 0 || int2 < 0) 
    {
        console.error("Negative Number in sumAll()");
        return "ERROR";
    }

    if(typeof(int1) !== 'number' || typeof(int2) !== 'number')
    {
        console.error("NaN in sumAll()");
        return "ERROR";
    }

    if(int1 > int2) {larger = int1; smaller = int2;}
    else {larger = int2; smaller = int1;}

    sum = 0;

    for(i = smaller; i <= larger; i++)
    {
        sum += i;
    }

    return sum;
};

// function getLarger(int1, int2) {
//     if(int1 > int2) {return int1;}
//     else {return int2;}
// }

// Do not edit below this line
module.exports = sumAll;
