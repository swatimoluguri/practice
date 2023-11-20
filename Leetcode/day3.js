/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var counter=0;
    while(counter!=nums.length){
        if(nums[counter]==val){
            nums.splice(counter, 1);
        }else{
          counter++;  
        }
    }
    var len=nums.length;
    return len;
};