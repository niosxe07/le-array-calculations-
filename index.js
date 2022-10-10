

console.log("alvins kks")
function converion(array) {  
  let a1rray = array.split(",");
  let result = [];

  for (let i = 0; i < a1rray.length; i++) {
    result.push(parseFloat(a1rray[i]));
  }
  return result;
}

function average(array) {
  array = converion(array);
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return result = sum / (array.length); 
}

function most_frequant(array) {
  array = converion(array);
  const result = new Map([]);

  for (let i = 0; i < array.length; i++) {
    n = array[i];
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
      if (n == array[i]) {
        count = count + 1;  
      }
    } 
    result.set(n, count)
  }
  return result;
}

function median(array) {
  array = converion(array)
  array.sort(function(a, b){return a - b})
  len = array.length
  half_array = (len / 2) -1
  
  if ((array.length) % 2 == 0) {
    let n1 = array[(half_array) + 1]
    let n2 = array[half_array]

    let result = n1 / n2;
    
  } else {
    let result = array[((len - 1) / 2) - 1]
  }

  return result;
}



const fs = require('fs');
var array = fs.readFileSync("\hi.txt").toString()

var readline = require('readline-sync');

// var method = readline.question("what do you want to do with your array: ");

// var array = readline.question("enter your array: ");

  
console.log(`this is the average of the array:  ${average(array)} `)
console.log(most_frequant(array))
console.log(median(array))

