class Person {
    name = ''
    age = 0
    gender = ''

    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    getPerson() {
        console.log({
            name: this.name,
            age: this.age,
            gender: this.gender
        })
    }
}

const person = new Person("Vinicius", 20, 'Masculino')
person.getPerson()

const person2 = new Person("Victor", 24, "Masculino")
person2.getPerson()

// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(1,2))

// const arrowFunctionSum = (num1, num2) => num1 + num2;

// console.log(arrowFunctionSum(2, 3))

// const operations = {
//     SUM: (a, b) => a + b,
//     MULTIPLY: (a, b) => a * b,
//     DIVIDE: (a, b) => a / b
// }

// console.log(operations['SUM'](10, 10))

// Estudar 