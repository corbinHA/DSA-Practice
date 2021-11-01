
// You're given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor. The first input is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor--its ancestor property points to None / null), and the other two inputs are descendants in the ancestral tree.


// Write a function that returns the youngest common ancestor to the two descendants.


// Note that a descendant is considered its own ancestor. So in the simple ancestral tree below, the youngest common ancestor to nodes A and B is node A.

// The youngest common ancestor to nodes A and B is node A.
//   A
//  /
// B


// Sample input: 

// The nodes are from the ancestral tree below.
// topAncestor = node A
// descendantOne = node E
// descendantTwo = node I



//                 A
//              /      \
//             B         C
//          /    \     /    \
//        D       E  F       G
//     /   \  
//   H      I 

// Sample Output:

// node b



class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
		if ( topAncestor === descendantOne || topAncestor === descendantTwo ) return topAncestor;
        if(descendantOne.ancestor === descendantTwo) return descendantTwo;
		if(descendantTwo.ancestor === descendantOne) return descendantOne;
		let descendantsOne = [descendantOne].concat(collectAllAncestors(topAncestor, descendantOne.ancestor));
		let descendantsTwo = [descendantTwo].concat(collectAllAncestors(topAncestor, descendantTwo.ancestor));

		for ( let i = 0; i < descendantsOne.length; i++) {
    		for (let j = 0; j < descendantsTwo.length; j++) {
        		if (descendantsTwo[j] === descendantsOne[i]) return descendantsTwo[j]
				}
		}

}

function collectAllAncestors(topAncestor, descendant) {
		if (descendant === topAncestor)return [descendant]
    if(descendant.ancestor !== null)return [descendant].concat(collectAllAncestors(topAncestor, descendant.ancestor));
}