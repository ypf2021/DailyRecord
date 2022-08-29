//区间左闭右闭
//第一版
// var search = function (nums, target) {
//     let left = 0;
//     let right = nums.length - 1 //5
//     let mid = Math.floor((right + left) / 2);

//     while (left <= right) {
//         if (target < nums[mid]) {
//             right = mid - 1;
//             mid = Math.floor((right + left) / 2);
//         } else if (target > nums[mid]) {
//             left = mid + 1;
//             mid = Math.floor((right + left) / 2);
//         } else {
//             return mid
//         }
//     }
//     return -1
// }


var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1 //5
    let mid;

    while (left <= right) {
        mid = Math.floor((right + left) / 2);

        if (target < nums[mid]) {
            right = mid - 1;

        } else if (target > nums[mid]) {
            left = mid + 1;

        } else {
            return mid
        }
    }
    return -1
}







console.log(search([1, 3, 5, 6, 7], 2))

