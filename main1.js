const convertFahrToCelsius = (temp) => {
    let output, calc, error;
  
    if (
      isNaN(temp) ||
      JSON.stringify(temp) == '[]' ||
      temp == null ||
      JSON.stringify(temp) == '""' ||
      temp === true ||
      temp === false
    ) {
      if (Array.isArray(temp)) {
        error = `${JSON.stringify(temp)} is not a valid number but a/an array.`;
      } else if (typeof temp === 'object') {
        error = `${JSON.stringify(temp)} is not a valid number but a/an object.`;
      } else if (typeof temp === 'string') {
        temp == '' ? (temp = '""') : temp;
        error = `${temp} is not a valid number but a/an string.`;
      } else if (temp === true || temp === false) {
        error = `${temp} is not a valid number but a/an boolean.`;
      }
  
      return error;
    } else {
      calc = (temp - 32) * (5 / 9);
      output = Number(calc.toFixed(4));
      return output;
    }
  };
  
 
  const checkYuGiOh = (n) => {
    let i = 1;
    let nums = [];
  
    if (
      isNaN(n) ||
      JSON.stringify(n) == '[]' ||
      n == null ||
      JSON.stringify(n) == '""' ||
      n === true ||
      n === false
    ) {
      return `invalid tempeter: ${JSON.stringify(n)}`;
    } else {
      while (i <= n) {
        nums.push(i);
        i++;
      }
    }
  
    nums.forEach((no, i) => {
      if (no % 2 == 0) {
        nums[i] = 'yu';
      }
      if (no % 3 == 0) {
        nums[i] = 'gi';
      }
      if (no % 5 == 0) {
        nums[i] = 'oh';
      }
      if (no % 2 == 0 && no % 3 == 0) {
        nums[i] = 'yu-gi';
      }
      if (no % 2 == 0 && no % 5 == 0) {
        nums[i] = 'yu-oh';
      }
      if (no % 2 == 0 && no % 3 == 0 && no % 5 == 0) {
        nums[i] = 'yu-gi-oh';
      }
    });
  
    return nums;
  };