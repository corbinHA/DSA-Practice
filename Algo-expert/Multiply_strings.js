// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.


// link: https://leetcode.com/problems/multiply-strings/


var multiply = function(num1, num2) {
    if (num1.length < num2.lenght) {
        let longNum = num1.split('').reverse();
        let shortNum = num2.split('').reverse();
    } else {
        let longNum = num2.split('').reverse();
        let shortNum = num1.split('').reverse();
    };

    let newNum = [];
    for (let i = 0; i < shortNum.length; i++) {
        for (let j = 0; j < longNum.length; j++) {
           let product = parseInt(longNum[i]) * parseInt(shortNum[j]) + (newNum[i + j] || 0);
           let remainder = product % 10
            let tensPlace = (product - remainder) / 10
            newNum[j + i] = remainder
            if (tensPlace) {
                newNum[j + i + 1] = (newNum[j + i + 1] || 0) + tensPlace
            } 
        }
        return newNum.reverse().join('').replace(/^0*/,'') || 0
    }

    
};