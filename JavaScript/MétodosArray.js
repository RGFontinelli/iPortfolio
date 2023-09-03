//Principais funções para array

//'join ()' junta sequencialmente os elementos de um array usando o caracetere passado por parametro. Pode juntar um array com outro ou adiciona o elemento escolhido entre os elementos da array
//'shift()' retorna o primeiro valor de uma array e remove os demais
//'unshift()' adiciona um elemento no início da matriz
//'sort()' ordena os elementos de uma array
//'reverse()' inverte a ordem dos elementos, o primeiro se torna o último e vice versa.
//'slice()' retorna os elementos selecionados de uma array, não altera a array original, cria outra.
//'lenght()' indica o numero de elementos de uma array
//'push(valor1, valor2, ...)' adiciona um ou mais elementos ao final de uma array
//'pop()' retorna o ultimo elemento de uma array e remove ele da array.
//'Splice()' altera o array adicionando ou removendo elementos dele.
//'concat()' faz a junção de duas partes retornando uma nova

var valores = [1, 8, 2, 3, 9, 10];

console.log("Array invertido: " + valores.reverse());//mostra a array invertida.

console.log("Último elemento do array: " + valores.pop()); //aqui o pop vai trazer o último elemento do reverse que foi feito acima.

console.log(valores.join('/')); //aqui o join vai adicionar a barra entre os elementos da array que sobraram, pois o último elemento foi removido e apresentado na linha acima.

console.log("Posição do número 3: " + valores.indexOf(3));//traz a posição que o elemento 3 está detro da array.

valores.push (7); //adicionando o elemento 7 no final da  array.

console.log (valores);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Utilizando o splice() para remover posicões
var val1 = [1, 2, 3, 4, 5];

val1.splice(2, 2); //o splice utiliza dois parametros, o primeiro indica qual posicao vamos remover e o segundo quantas posicoes a partir dessa vamos remover.

console.log(val1);

//Utilizando splice() para remover um elemento e adicionar outro
var names = ["Maria", "João", "Rafa", "Nina"];
var nnames = names.splice(1,1,"Luiz"); //Primeiro paramentro escolhe a posição que vamos remover, o segundo quantas posiçoes queremos remover e em seguida o que vamos adicionar naquele lugar da que removemos.
console.log(nnames);//Aqui ele traz o que foi selecionado e removido da variável names.
console.log(names);//Aqui sim, a variável após remover o João e adicionar o Luiz.

//Adicionando um elemento em uma array
var pais = ["Brasil", "Argentina", "Colombia"];
console.log(pais);//Imprimiu os países antes de adicionar algum outro elemento.

pais.unshift("Uruguai");//Adiciona o elemento escolhido a array.
console.log(pais);//Agora imprime aquela array anterior, porém, com o elemento "Uruguai" adicionado no começo

//Utilizando slice()
var array = [1, 2, 3, 4, 5, 6];
var newarray = array.slice(0, 3);//Selecionou a partir da posição zero, tês elementos.

console.log(newarray);//Então vai retornar os elementos 1, 2, 3 da array.

//Utilizando concat()
var paisarray = pais.concat(array);//Juntando as arrays 'pais' e 'array';
console.log(paisarray);//Imprimindo a nova array 'paisarray' que juntou as outras duas.