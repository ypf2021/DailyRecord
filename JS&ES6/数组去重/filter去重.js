const unique = function (arr) {
    var newArr = arr.filter(function (item, index, array) {
        return array.indexOf(item) === index
    })

    return newArr
}


var res = unique([1, '1', '1', 1, 2, true, false, true, 3, 2, 2, 1])

console.log(res)