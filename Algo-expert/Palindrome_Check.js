// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

function isPalindrome(string) {
    if (string.length === 1) {
        return true
    }
    
    let backwardString = []

    for ( i = string.length - 1; i >= 0; i--) {
        backwardString.push(string[i])
    }
    if (string === backwardString.join("")) {
        return true
    } else {
        return false
    }
}