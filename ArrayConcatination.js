var getConcatenation = function(nums) {
    // const numlength = nums.length;
    // for(let i=0; i<numlength; i++){
    //     nums.push(nums[i])
    // }
    // return nums
    // or
    // return nums.concat(nums)
    // or
    let num = nums
    let n = nums.length
    let ans = []

    for(let i = 0; i < n; i++){
        ans[i] = num[i]
        ans[i + n] = num[i]
    }

    return ans

};
