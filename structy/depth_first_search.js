// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ


// depthFirstValues(null); 
// //    -> []

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// depthFirstValues(a); 
// //    -> ['a', 'b', 'd', 'e', 'c', 'f']

const depthFirstValues= (root) => {
    if (root === null) return []
    const nodes = [root]
    const values = []
    while (nodes.length) {
        let value = nodes.pop()
        if (value.right) nodes.push(value.right)
        if (value.left) nodes.push(value.left)
    values.push(value.val)
    }
	return values
 }
