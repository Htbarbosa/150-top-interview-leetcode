/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
   nums1.splice(m, nums1.length - m, ...nums2);
   nums1.sort((a, b) => a - b);
   console.log(nums1);
};




merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // Output: [1,2,2,3,5,6]
merge([1], 1, [], 0); // Output: [1]
merge([0], 0, [1], 1); // Output: [1]