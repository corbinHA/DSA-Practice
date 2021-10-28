tree levels
Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const treeLevels = (root) => {
// 	const 2dArr = [root]
// 	let level = 0
// 	if 2dArr[level]:
// 		2dArr[level].append(root.val)
// 	else:
// 		2dArr.push([root.val])
// 	if root.left != null:
// 		treeLevel(root.left)
// 	If root.right != null:
// 		treeLevel(root.right)
// 	}

const treeLevels = (root) => {
	if (root === null) {
		return []
	}
	const array = []
	let level = 0
	const q = [{node: root, level: level}]
	while (q.length) {
		let {node, level} = q.shift()
		if (array[level]) {
			array[level].push(node.val)
		} else {
			array.push([node.val])
		}
		if (node.left !== null) {
		q.push({node: node.left, level: level + 1})
		}
		if (node.right !== null) {
		q.push({node: node.right, level: level + 1}) 
		}
	}
	return array
}
