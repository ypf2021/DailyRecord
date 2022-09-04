var removeElement = function (nums, val) {
    let slowIndex = 0;
    let fastIndex = 0;
    for (fastIndex; fastIndex < nums.length; fastIndex++) {
        if (val != nums[fastIndex]) {
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex
}
console.log(removeElement([2], 3))
