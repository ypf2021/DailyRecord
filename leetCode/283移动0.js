var moveZeroes = function (nums) {
    let fastIndex = 0;
    let slowIndex = 0;
    for (; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] != 0) {
            // temp = nums[slowIndex];
            // nums[slowIndex] = nums[fastIndex];
            // nums[fastIndex] = temp
            [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]]
            slowIndex++
            // nums[fastIndex] = 0
        }
    }
    return nums
};

console.log(moveZeroes([0, 3, 0, 1, 0, 23]));