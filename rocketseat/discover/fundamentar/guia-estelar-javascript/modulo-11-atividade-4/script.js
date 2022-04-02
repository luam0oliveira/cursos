/* 
∞ Buscando e contando dados em Arrays ∞
Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
    • Contar o número de categorias e o número de livros em cada categoria
    • Contar o número de autores
    • Mostrar livros do autor Auguto Cury
    • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];

let listAuthor = [];

for(let i = 0; i<booksByCategory.length;i++){
  for(const element of booksByCategory[i]['books']){
    if(!listAuthor.includes(element['author'])){
      listAuthor.push(element['author'])
    }
  }
}

console.log(listAuthor)

console.log(`O número de categorias de livros é: ${booksByCategory.length}`)
console.log(`O número de autores é: ${listAuthor.length}`)
for(const author of listAuthor){
  console.log(`Livros de ${author}: ${listBooks(author,booksByCategory)}`)
}


function listBooks(author, library){
  let listOfBooks = []

  for(let i = 0; i<library.length;i++){
    for(const element of library[i]['books']){
      if(element['author'].includes(author)){
        listOfBooks.push(element['title'])
      }
    }
  }

  return listOfBooks.join('; ')
}