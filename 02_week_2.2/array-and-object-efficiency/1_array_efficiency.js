//array efficiency

const arr = ["a", "b", "c", "d"];
//Time complexity of push() -O(1)
//Space complexity of push() -O(1)

arr.push("e");

//Time complexity of push() -O(1)
//Space complexity of push() -O(1)
arr.pop();

// unshift - O(n)
//prothom dik theke ekta item add korle jehetu each and every item ke touch korte hocche means ekhane every item er index change hoye jacche tai er complexity O(n)

arr.unshift("z");

// shift - O(n)
//prothom dik the ekta item remove korle jehetu each and every item ke touch korte hocche means ekhane every item er index change hoye jacche tai er complexity O(n)
arr.shift();

//==== includes - O(n) ====//
// protyek ta item ke check korte hocce tahole ekahne complexity hobe O(n)

console.log(arr.includes("c")); //true

//accessing item using index - O(1)
console.log(arr[3]); //d
