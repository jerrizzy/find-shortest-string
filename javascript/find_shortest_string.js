function findShortestString(arr) {
  // type your code here
  let shortest = arr[0];

  for ( let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest += arr[i]
    } else if 
      (arr[i].length >= shortest.length) {
        shortest
      }
  }
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// I need to iterate over each element of the array
// get the length of string at index 0 
// compare it to the length of the other element 
// 
