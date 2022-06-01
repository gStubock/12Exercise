function filterByValue(arr, key) {
  return arr.filter(function(val) {
    return val[key] !== undefined;
  });
}

function find(arr, value) {
  return arr.filter(function(val) {
    return val === value;
  })[0];
}

function findInObj(arr, key, Value) {
  return arr.filter(function(val) {
    return val[key] === Value;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
  }