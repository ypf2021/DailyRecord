//使用indexOf，在找不到一样的时，存入新数组中

var unique = function (arr) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//和上面的私立一样就是换了一个函数
const unique = (arr) => {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

//但这两个函数都有各自的问题。 indexOf判断不了 NaN。includes会将空值认为时undefined


var res = unique([1, '1', '1', 1, 2, true, false, true, 3, 2, 2, 1])

console.log(res)