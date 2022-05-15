// [°F] = [°C] × 9⁄5 + 32 	
// [°C] = ([°F] − 32) × 5⁄9

const ftoc = function(inTemp) {
    retTemp = inTemp - 32;
    retTemp = Math.round((retTemp * 5 / 9) * 10) / 10
    return retTemp;
};

/* Math notes:
   66.66666666667
   666.6666666667

   Math.round...
   666.0000000000
   66.60000000000
*/

const ctof = function(inTemp) {
    retTemp = Math.round((inTemp * 9 / 5) * 10) / 10
    retTemp += 32;
    return retTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
