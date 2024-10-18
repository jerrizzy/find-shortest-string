function findShortestString(arr) {
  let shortest = arr[0]; // Initialize with the first string

  for (let i = 1; i < arr.length; i++) { // Start loop from the second element
    if (arr[i].length < shortest.length) { // Check if the current string is shorter
      shortest = arr[i]; // Replace shortest with the new shorter string
    }
  }

  return shortest; // Return the shortest string found
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
// initialize a variable to hold the element at index 0
// loop through the array starting from index 1 
// compare it to the initialized variable holding element at index 0
// if element at index 1 is smaller than the one at index 0
// replace it with element at index 0 in the initialized variable
// otherwise the loop keeps going
// and return the initialized variable


// And a written explanation of your solution
// I need to iterate over each element of the array
// get the length of string at index 0 
// compare it to the length of the other element
// the if statement checks if arr[i] is shorter than shortest variable
// if the strings are equal length the if condition (arr[i].length < shortest.length) 
// will not be true
// the loop moves on without changing shortest
// Because of this, the first occurrence of the shortest string 
// will remain as shortest. Later strings that are of the same length will be skipped.