function fibonnaciGenerator(n) {
  var output = [];
  for (var i = 0; i < n; i++) {
    if (i === 0) {
      output.push(0);
    } else if (i === 1) {
      output.push(1);
    } else {
      var newestNumber = output[output.length - 1];
      var previousNumber = output[output.length - 2];
      output.push(newestNumber + previousNumber);
    }
  }
    return output; 
}

console.log(fibonnaciGenerator(1));
console.log(fibonnaciGenerator(2));
console.log(fibonnaciGenerator(5));
