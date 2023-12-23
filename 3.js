class Car {
    constructor(brand, createdAt) {
        this.brand = brand;
        this.createdAt = createdAt;
    }
}
function insertIntoMiddle(arr, element) {
    if (arr.length <= 1) {
        arr.push(element)
        return arr;
    }
    var middle = Math.floor(arr.length / 2); // находим середину
    var firstArr = arr.slice(0, middle); // получаем первую половину
    firstArr.push(element); // добалвяем в нее елемент
    var secondArr = arr.slice(middle) // получаем вторую половину
    return firstArr.concat(secondArr); // соединяем
}

var arr = [1, 2, 4, 5];



console.log(new Car("LADA", 2010));
console.log(insertIntoMiddle(arr, 3));

