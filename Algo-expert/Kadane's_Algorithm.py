
# 	Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input.
#  A subarray must only contain adjacent numbers.

# Smple imput: array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
# Output: 19 [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]


def kadanesAlgorithm(array):
    maxSoFar = array[0]
    maxEndingHere = array[0]
    for num in array[1:]:
        maxEndingHere = max(num, maxEndingHere + num)
        maxSoFar = max(maxEndingHere, maxSoFar)
    return maxSoFar
