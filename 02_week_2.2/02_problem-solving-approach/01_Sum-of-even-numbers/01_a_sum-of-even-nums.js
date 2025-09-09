//sum of even square

//Time Complexity - O(n+n+n) --> O(n)
//Space Complexity - O(n+n+1) --> O(n)
function sumOfEvenSquare(numbers) {
  //define an array to track the even numbers
  const evenArr = [];
  //define array to track down the squared numbers
  const squaredArr = [];
  //define a variable to track down the sum
  let sum = 0;
  //find out the even numbers
  for (let elm of numbers) {
    if (elm % 2 === 0) {
      evenArr.push(elm);
    }
  }
  //squared the even numbers and return an array
  for (let elm of evenArr) {
    squaredArr.push(elm * elm);
  }
  console.log(squaredArr);
  //sum of the squared number array
  for (let elm of squaredArr) {
    sum = sum + elm;
  }
  //return the result
  return sum;
}

const sum = sumOfEvenSquare([1, 2, 3, 4, 5, 6]);
console.log(sum);
