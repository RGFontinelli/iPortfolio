//O método Array.map() permite iteração sobre uma array e modificar os elementos usando a função callback.
//Sintaxe do array.map() ----> arr.map(function(elemento, índice, array){}, this); o elemento é cada elemento do array, o índice é a posição do elemento, o array é o próprio array. 


var arr = [3, 4, 5, 6];

//criando uma outra variável chamada "modifArr" que vai pegar a variável arr e utilizar o map com uma função que para cada elemento da array inicial será multiplicado por 3.
var modifArr = arr.map(function(element){
    return element*3;
});

console.log(modifArr);

//Retornando somente os nomes das pessoas com o map
var pessoas = [
    {nome: "Rafa", idade: 25},
    {nome: "Nina", idade: 28},
    {nome: "Mig", idade: 21},
    {nome: "Edu", idade: 21},
]

nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);