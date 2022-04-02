// 1.
var weight;

// 2. Que tipo de dado é a variável acima? undefined

// 3.
var name = 'Luam Alves de Oliveira'
var age = 18
var starts = 4.9 
var isSubscribed = true

// 4. A variável student abaixo é de que tipo de dado? Object
let student = {
  name: 'Luam Alves de Oliveira',
  age: 18,
  starts: 4.9, 
  isSubscribed: true,
  weight: 54
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`)

// 5.
let students = []

// 6.
students.push(student)

// 7.
console.log(students[0])

// 8.
student = {
  name: 'Thiago Treze',
  age: 18,
  starts: 100000000, 
  isSubscribed: true,
  weight: 54
}

students[1] = student

// 9. É undefined, porque o valor da variável só foi atribuido após a execução do console.log()

// 10. Gera um erro de referência porque a variável não foi declarada ainda