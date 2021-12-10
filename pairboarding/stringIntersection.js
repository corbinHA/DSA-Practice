// You have an array, with two elements in it. Both elements are strings of numbers in sorted order. Your goal is to examine both strings, and return a string of the intersection of the numbers in the strings in the original array. Basically, return the numbers that exist in both strings. If there are no matches, return false.

// Ex:
// Input: [“1, 5, 14, 20”, “1, 2, 5, 20, 30”]
// Output: “1, 5, 20”



// new empty array for matching values
// split first string in the array
// create a new set for the new array 
// for loop
//     find matching numbers and add them to an empty string\
// return newArr.join(‘,’)

const stringIntersection = (arr) => {
//    const newArr = [];
   const firstValues = arr[0].split(', ');
   const secondValues = arr[1].split(', ');
   const firstSetValues = new Set(firstValues);
//    for (let i = 0; i < secondValues.length; i++) {
//       if (firstSetValues.has(secondValues[i])) {
//          newArr.push(secondValues[i]);
//       }
//    }

    const newArr = secondValues.filter(el => firstSetValues.has(el))

   if (newArr.length) return newArr.join(', ');
   return false;
};
