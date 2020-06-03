function findDuplicates(arr) {
    arr = arr.join(', ').split(', ').map(Number).filter((e, i, arr) => {
        return (arr.indexOf(e) !== i);
    });
    return arr;
}
console.log(findDuplicates(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));