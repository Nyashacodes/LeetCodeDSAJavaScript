//BruteForce
var twoSum = function(nums, target) {
    // nums = [2,7,11,15], target = 9
    let n = nums.length;
    output=[];
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            if(nums[i]+nums[j]==target){
            output.push(i,j);
        }
        }
    }
    return output;
};

//optimized

var twoSum = function(nums, target) {
    let hash = {};
    for(let i=0;i<nums.length;i++){
        let y = target - nums[i];
        if(y in hash){
            return [hash[y],i]
        }else{
            hash[nums[i]] = i;
        }
    }
};

/*using map
 */
var twoSum = function(nums, target) {
    // Create an empty hash-map for value-index pairs
    const seen = new Map();
    // Loop once over the array
    for (let i = 0; i < nums.length; i++) {
        // For each array element, calculate the required complementary value
        let complement = target - nums[i];
        // If the complement has been seen, return the valid pair
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        // If complement has not been seen, add value-index pair to the map
        seen.set(nums[i], i);
    }
};
