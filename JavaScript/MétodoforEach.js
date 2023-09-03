//Método forEach() utilizado para percorrer arrays.
//Sintaxe array.forEach(function(valor, indice, array){ console.log(array[indice]);});
//valor (obrigatório) = o valor do elemento atual do array; indice = o numero do indice do elemento atual do array; array = objeto de array ao qual o elemento atual pertence.

var a = [10, 20, 30, 40, 50, 60];
var b = [1, 2, 3, 4, 5, 6];

for (var valor of b){
    console. log(valor);
}

//Mesma coisa que o for acima
a.forEach(valor => console.log (valor));

//Fazendo soma com forEach
//Precisamos definir tot igual a zero no começo para zerar a variável.
var tot = 0;
a.forEach(valor => { //pegando a array "a" armazenar em tot e somar com o "valor".
    tot += valor;
})

console.log(tot);

//forEach com função
a.forEach(function(valor, indice, array){
    console.log(array[indice]);
});
