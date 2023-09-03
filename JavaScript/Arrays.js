//Arrays (matrizes) são listas de objetos; Objetos com múltiplos valores armazenados; JavaScript não tem um tipo de dados array específico.
//Cada item no array é separado por vírgula.

//Exemplos de array abaixo
var compras = ['pão', 'leite', 'queijo', 'bolacha']; //array de string;
var sequencia = [1, 1, 2, 3, 4, 5]; //array de número
var aleatorio = ['árvore', 795, [0, 1, 2]]; //array mista com outra array dentro.

//dentro de uma array podemos utilizar variáveis e sempre o primeiro elemento é indicado pelo zero.
x1 = 1;
x2 = 2;
x3 = 3;
x4 = 4;
var varias = [x1, x2, x3, x4];

var arr = [42]; //define o elemento 42 na array
var arr = Array(42); //define o tamanho da array, ou seja, pode ter 42 elementos.

//inserindo elementos em uma array
var emp = [];
emp[0] = "Ana";
emp[1] = "João";
emp[2] = "Luis";

//Faz a mesma coisa que a operação acima, define o que tem em cada posição da array.
var motos = new Array("BMW", "Yamaha", "Honda");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var valores = [1, 8, 2, 3, 9, 10];
console.log (valores[3]);//Mostra o elemento que está na posição 3 da array definida anteriormente.

//o comando "for" é utilizado para realizar looping, então nessa operação abaixo ele está mostrando a posição da array e trazendo que elemento tem naquela posição enquanto a variável "pos" for menor que o tamanho daquela array.
for (var poss = 0; poss < valores.length; poss++){
    console.log("Posição: " + poss + " Valor: " + valores [poss]);
}

//Calculando a média dos números de um array
var soma = 0;
for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos]; //mesma coisa que soma = soma + valores [pos];
}

var media = soma/valores.length;

console.log(media);