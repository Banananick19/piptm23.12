function sum(a, b) {
    return a + b;
}

function Student(name, age) {
    this.age = age;
    this.name = name
}

console.log(sum(10, 20));
console.log(new Student("Андрей", 19));