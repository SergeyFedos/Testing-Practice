const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const reverseString = (str) => {
  return str.split('').reverse().join('')
}

const calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b

}

const caesarCipher = (str, shift) => {
  const charCodes = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);

    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? 65 : 97;


      let shiftedCode = ((code - base + shift) % 26 + 26) % 26 + base;
      charCodes.push(shiftedCode);
    } else {

      charCodes.push(code);
    }
  }

  return String.fromCharCode(...charCodes);
};

const analyzeArray = (arr) => {
  const length = arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b, 0)
  const average = sum / length;
  return {
    average,
    min,
    max,
    length
  }
}


module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray }