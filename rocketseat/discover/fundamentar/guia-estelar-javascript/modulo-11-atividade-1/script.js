/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let grade = 100;

function calculateGrade(score){
  if (score<0 || score>100){ // Nota inválida
    return 'Nota inválida'
  } else if(score>=90){ // Nota A
    return 'A'
  }else if(score>=80){ // Nota B
    return 'B'
  }else if(score>=70){ // Nota C
    return 'C'
  }else if(score>=60){ // Nota D
    return 'D'
  }else{
    return 'F' // Nota F
  }
}

console.log(calculateGrade(-1)) // Caso nota inválida
console.log(calculateGrade(101)) // Caso nota inválida
console.log(calculateGrade(90)) // Caso A
console.log(calculateGrade(86)) // Caso B
console.log(calculateGrade(75)) // Caso C
console.log(calculateGrade(65)) // Caso D
console.log(calculateGrade(45)) // Caso F
console.log(calculateGrade()) 
