//思路是选中一个，然后查后面有没有一样的，有就用splice去掉
// unique = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 arr.splice(j, 1);   //删除重复元素
//                 j--;
//             }
//         }
//     }
//     return arr
// }

//思路是，在新数组中查询有没有传入的数组，有的话就看下一个，没有的话就填入。
unique = function (arr) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (var j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) break;
        }
        if (j == newArr.length) {   //如果搜了一遍没有的话，这时，j == newArr.length
            newArr.push(arr[i])
        }
    }
    return newArr
}




var res = unique([1, '1', '1', 1, 2, true, false, true, 3, 2, 2, 1])

console.log(res)