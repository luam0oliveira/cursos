/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/


let temperature = '78C';

function calculateTemperature(temperature){
  temperature = temperature.toLowerCase() // Transforma medida para que possa ser identifcada
  if(temperature.includes('f')){
    temperature = Number(temperature.substring(0,temperature.indexOf('f'))) // Identifica qual a medida (Fahrenheit para Celsius)
    temperature = (temperature - 32) * 5/9 // Transforma para Celsius
    return `${temperature.toFixed(2)}ºC` 
  }else{
    temperature = Number(temperature.substring(0,temperature.indexOf('c'))) // Identifica qual a medida (Celsius para Fahrenheit)
    temperature = temperature * 9/5 + 32 // Transforma para Fahrenheit
    return `${temperature.toFixed(2)}ºF` 
  }
}

console.log(calculateTemperature(temperature))