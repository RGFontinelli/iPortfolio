//Filter() recebe cada elemento da array e aplica uma condicional a ele. Se a condição é verdadeira ele é adicionado ao array de resultado.
//Filter() inline que é o filter em uma linha só, sem função.
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numeros.filter(div => div % 2 === 0);//Aqui o filter vai definir que a variável div vai armazenar o número quando ele for divisível por 2 e sobrar zero.
console.log(result);

//utilizando uma função para retornar os números maiores que 5 daquela array utilizando filter e a função dentro dele
//precisamos definir um nome para a função que é "numerosFiltrados"
var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(numerosFiltrados);

//Funçao para retornar valores menores que 5 na matriz, fazendo uma função fora do filter e depois colocando nele.
function buscarValores(valor){
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

//Forma mais simples de utilizar o filter
var r2 = numeros.filter(valor => valor > 5);
console.log(r2);

//Utilizando filter com strings
var pessoas = [
    {nome: "Rafa", idade: 25},
    {nome: "Nina", idade: 28},
    {nome: "Mig", idade: 21},
    {nome: "Edu", idade: 21},
]

//função para retornar as pessoas que tem 4 letras no nome
var listaPessoas = pessoas.filter(
    function (valor){
        return valor.nome.length == 4;
    }
);
console.log(listaPessoas);