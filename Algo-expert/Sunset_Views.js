
//   Given an array of buildings and a direction that all of the buildings face,
//   return an array of the indices of the buildings that can see the sunset.


//   A building can see the sunset if it's strictly taller than all of the
//   buildings that come after it in the direction that it faces.


//   The input array named buildings contains positive, non-zero
//   integers representing the heights of the buildings. A building at index
//   i thus has a height denoted by buildings[i]. All of
//   the buildings face the same direction, and this direction is either east or
//   west, denoted by the input string named direction, which will
//   always be equal to either "EAST" or "WEST". In
//   relation to the input array, you can interpret these directions as right for
//   east and left for west.


//   Important note: the indices in the ouput array should be sorted in ascending
//   order.

// Sample Input #1
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "EAST"

// Sample Output #1
// [1, 3, 6, 7]

// Below is a visual representation of the sample input.
//    _
//   | |_ _
//  _| | | |_   _
// | | | | | | | |_
// | | | | | |_| | |
// |_|_|_|_|_|_|_|_|

// Sample Input #2
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "WEST"

// Sample Output #2
// [0, 1]

// The buildings are the same as in the first sample
// input, but their direction is reversed.

function sunsetViews(buildings, direction) {
	let sunsetBuildings = [];
	let maxHeight = 0;
	if (direction === "EAST") {
		for (let i = buildings.length - 1; i >= 0; i--) {
			if (buildings[i] > maxHeight) {
				sunsetBuildings.push(i)
				maxHeight = buildings[i]
			}
		}
		return sunsetBuildings.sort((a,b)=> a - b)
	}
	if (direction === "WEST") {
		for (let i = 0; i < buildings.length; i++) {
			if (buildings[i] > maxHeight) {
				sunsetBuildings.push(i)
				maxHeight = buildings[i]
			}
		}
		return sunsetBuildings
	}
  return [];
}

// Stack option
function sunsetViews(buildings, direction) {
  let possibleBuildings = []
	let startIdx = direction === "EAST" ? 0 : buildings.length - 1;
	let step = direction === "EAST" ? 1 : -1;
	
	let idx = startIdx
	while (idx >= 0 && idx < buildings.length) {
		let buildingHeight = buildings[idx]
		
		while (possibleBuildings.length > 0 && buildings[possibleBuildings[possibleBuildings.length - 1]] <= buildingHeight) {
			possibleBuildings.pop()
		}
		
		possibleBuildings.push(idx)
		
		idx += step
	}
	
	if (direction === "WEST") return possibleBuildings.sort((a,b) => a - b)
  return possibleBuildings;
}
