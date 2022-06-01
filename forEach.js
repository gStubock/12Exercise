
function doubleValues(arr) {
  let newArr =[];
  arr.forEach(function(val){
    newArr.push(val *2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  let newArr =[];
  arr.forEach(function(num) {
    if (num % 2 === 0) {
    newArr.push(num);
    }
  });
  return newArr;
}


function showFirstAndLast(arr) {
  let newArr =[];
  arr.forEach(function(firstlast){
    newArr.push(firstlast[0] + firstlast[firstlast.length -1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val){
    val[key] = value;
  });
  return arr;
}

// had to completely copy this solution//
function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function(letter) {
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

