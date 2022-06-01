function doubleValuesWithMap(arr) {
  let newArr = [];
  arr.map(function(val){
    newArr.push(val *2);
  });
  return newArr;
}

function valTimesIndex(arr) {
  return arr.map(function(val, idx) {
    return val * idx;
  });
}

function extractKey(arr, key) {
  return arr.map(function(val){
    return val[key];
  });
}

function extractFullName(arr) {
  return arr.map(function(val) {
    return val.first + " " + val.last;
  });
}

