/* //sum of even square
//Time Complexity - O(n+n+n) --> O(n)
//Space Complexity - O(n+n+1) --> O(n)
function sumOfEvenSquare(numbers) {
  //find out the even numbers
  const evenArr = numbers.filter((elm) => elm % 2 === 0);
  //squared the even numbers and return an array
  const squaredArr = evenArr.map((elm) => elm * elm);

  //sum of the squared number array
  const result = squaredArr.reduce((acc, curr) => acc + curr, 0);
  //return the result
  return result;
} */

//==== shortcut====//
function sumOfEvenSquare(numbers) {
  //find out the even numbers and squared the numbers ans sum those numbers
  const sum = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((prev, next) => {
      return prev + next;
    }, 0);

  return sum;
}
const sum = sumOfEvenSquare([1, 2, 3, 4, 5, 6]);
console.log(sum); //56
