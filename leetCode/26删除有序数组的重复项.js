var removeDuplicates = function (nums) {
    let slowIndex = 0;
    let fastIndex = 0;

    for (; fastIndex < nums.length; fastIndex++) {
        if (nums[slowIndex] != nums[fastIndex]) {
            nums[++slowIndex] = nums[fastIndex]
        }
    }
    return slowIndex + 1
};