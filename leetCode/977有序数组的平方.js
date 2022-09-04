var sortedSquares = function (nums) {
    let [resArr, backIndex, frontIndex, resIndex] = [[], 0, nums.length - 1, nums.length - 1]

    while (backIndex <= frontIndex) {
        // if(nums[backIndex])
        let [front, back] = [nums[frontIndex] * nums[frontIndex], nums[backIndex] * nums[backIndex]];
        if (front >= back) {
            resArr[resIndex--] = front
            frontIndex--;
        } else {
            resArr[resIndex--] = back
            backIndex++;
        }
    }

    return resArr
};

console.log(sortedSquares([-7, -3, 2, 3, 11])); 