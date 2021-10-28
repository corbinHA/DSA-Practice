// sum possible

// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.
// You may assume that the target amount is non-negative.

// test_00:
// sumPossible(8, [5, 12, 4]); // -> true, 4 + 4

const sumPossible = (amount, numbers) => {
	if (amount === 0) return true
	for (let i = 0; i < numbers.length; i++) {
		let count = numbers[i]
		j = 0
		while (j < numbers.length) {
			if (count + numbers[j] <= amount) {
				count += numbers[j]
            } else if (count === amount) {
                return true
            } else {
                j++
            }		
        }
	}
	return false
}
