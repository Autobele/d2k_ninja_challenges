/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [10, 6, 7, 9, 1]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray(array){
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornarArray(arr[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarArrayIndex(array, index){
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['autobele', 25, 'analista', false, [], {}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornarArrayIndex(arr2, arr2.length-1)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
  var allBooks = {
    'God Of War': {
      quantidadePaginas: 100,
      autor: 'Kratos',
      editora: 'Atica'},

    'Legend Tyson': {
      quantidadePaginas: 120,
      autor: 'Tyson',
      editora: 'Saraiva'},

    'A Cabana': {
      quantidadePaginas: 185,
      autor: 'William P. Young',
      editora: 'Saraiva'}
  }

  return !bookName ? allBooks : allBooks[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro A Cabana tem "+ book('A Cabana').quantidadePaginass +" páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro God of War é "+book('God Of War').autor+".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Tyson Legend foi publicado pela editora "+book('Legend Tyson').editora+".")
