const search = (nums, target) => {
  const rotIdx = findRotIdx(nums);
  
  //If no rotation index (I.e. - rotIdx = 0), we have an unrotated array.  Just perform a standard binary search.
  if (!rotIdx) return binarySearch(nums, 0, nums.length - 1, target);
  
  //If target is less than or equal to last num in rotated array, we know target is between rotation index and end.
  //If not, we know target is between start and rotation index.
  if (target <= nums[nums.length - 1]) return binarySearch(nums, rotIdx, nums.length - 1, target);
  else return binarySearch(nums, 0, rotIdx - 1, target);
};

//Standard binary search.  mid = (l + r) >>> 1 can also be Math.floor(l + (r - l) / 2), etc.  Everyone has a preference it seems.
//Math.floor((l + r) / 2) is even fair play here given constraints, though worth noting - Bad practice overall.
function binarySearch(arr, l, r, target) {
  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}

//This helper function finds the index of the lowest element in the array - I.e. The Rotation Index.  
//For more information on how exactly this works, see LC 153.  It's almost this exact question / code.
//The for (let l = 0, r = arr.length - 1; l <= r;) is just another way to write binary search.  
//Works same as let l = 0, r = arr.length - 1; while (l <= r) {.
function findRotIdx(arr) {
  if (arr[0] < arr[arr.length - 1]) return 0;
  for (let l = 0, r = arr.length - 1; l <= r;) {
    const mid = (l + r) >>> 1;
    if (arr[mid] < arr[mid - 1]) return mid;
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[0] < arr[mid]) l = mid + 1;
    else r = mid - 1;
  }
}