const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
	total = 0;

  for(i = 0; i < arguments.length; i++)
  {
    if(Array.isArray(arguments[i]) === true) 
    {
      arguments[i] = sum.apply(null, arguments[i]);
    }
    else
    {
      total = add(total, arguments[i]);
    }
  }

  

  return total;
};

const multiply = function() {
  total = 1;

  for(i = 0; i < arguments.length; i++)
  {
    if(Array.isArray(arguments[i]) === true) 
    {
      arguments[i] = multiply.apply(null, arguments[i]);
    }
    else
    {
      total *= arguments[i];
    }
  }

  return total;
};

const power = function() {
	base = arguments[0];
  exp = arguments[1];
  total = 1;

  for(i = 0; i < exp; i++) 
  {
    total *= base;
  }

  return total;
};

const factorial = function() {
  int = arguments[0];

  if(int === 0) {return 1;}
  else { return (int * factorial(int - 1));}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
