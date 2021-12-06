

// There are n balls placed on a 1-dimensional axis with each of them moving with the same non-zero speed. direction[i] represents the direction in which the i<sup>th</sup> ball is moving, with -1 meaning that it is moving to the left and 1 meaning it is moving to the right. The strength of the i<sup>th</sup> ball is described by strength[i]. If 2 balls collide, the one with the higher strength destroys the smaller one. If both have the same strength, both are destroyed. Return a list of the indices of the balls that remain after all the collisions have occurred, in ascending order


// Note that the arrays direction and strength are 0-indexed. 

// Example
// direction= [1, -1]
// strength = [2, 1]


// The number of balls n = 2. The balls are listed in order of occurrence from left to right, so ball 0 is somewhere to the left of ball 1. Ball 0 is moving to the right and ball 1 is moving to the left. The balls will collide at some point and the ball with the higher strength, ball 0, remains. Return [0] as the answer.


