// Staircase Traversal

// You're given two positive integers representing the height of a staircase and the maximum number of steps that you can advance up the staircase at a time. Write a function that returns the number of ways in which you can climb the staircase.


// For example, if you were given a staircase of height = 3 and maxSteps = 2 you could climb the staircase in 3 ways. You could take 1 step, 1 step, then 1 step, you could also take 1 step, then 2 steps, and you could take 2 steps, then 1 step.

// For example, if you were given a staircase of <span>height = 3 and maxSteps = 2 you could climb the staircase in 3 ways. You could take 1 step, 1 step, then 1 step, you could also take 1 step, then 2 steps, and you could take 2 steps, then 1 step.



// height = 4
// maxSteps = 2

// Output: 5

function numWays(height, maxSteps, memo={0: 1, 1: 1}) {
	if (height in memo) return memo[height]
	memo[height] = 0;

	for(let step = 1; step <= maxSteps; step++) {
		if (step <= height) {
			memo[height] += numWays(height - step, maxSteps, memo);
		}
	}
	
	return memo[height]
}
