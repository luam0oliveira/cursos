/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {
  incomes: [10000],
  expenses: [900,100,2000,100],
}

function calculateBalance(incomes,expenses){
  incomes = incomes.reduce((sum, currentValue) => sum+currentValue)
  expenses = expenses.reduce((sum, currentValue) => sum+currentValue)
  return (incomes - expenses).toFixed(1)
}

console.log(calculateBalance(familia.incomes,familia.expenses))