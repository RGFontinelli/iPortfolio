//o reduce() reduz um array de valores a um único valor.

var numeros = [1, 2, 3, 4, 5, 6];
//Abaixo o reduce vai ser utilizado na nova variavel chamada total através de uma função.
//O que a função ta fazendo: pegando a variavel total e variavel array numero e retornando para a variavel total a posição 0 da array mais a próxima assim sucessivamente somando todos os elementos da rray em um só.
var total = numeros.reduce(function(total, numero){
    return total + numero;
}, 0);
console.log(total);

//Outra forma de usar o reduce com for
var tot = 0;
//O que o for está fazendo com a variável i, enquanto i menor que o tamanho da array "numeros", somar mais uma posição no i e armazenar as somas da posição i de dentro da array na variável "tot".
for (var i = 0; i < numeros.length; i++){
    tot += numeros[i];
}

console.log(tot);