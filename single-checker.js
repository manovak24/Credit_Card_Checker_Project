const validateCred = (arr) => {
	let array = arr.slice(); 
    for (let i = (array.length - 2); i >= 0; i = i - 2) {
      //console.log(array);
    array[i] = array[i] * 2; 
    if (array[i] > 9) {
        array[i] = array[i] - 9;
      } 
    }
  let arraySum = array.reduce((acc, cur) => acc + cur); 
  if (arraySum % 10 === 0) {
    return true  
  } else {
    return false
    }
};

const test = validateCred([4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]);
console.log(test);