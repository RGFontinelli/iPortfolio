//funcao regular
//definindo o nome de uma funcao
function multiplicar (x,y){
    return x*y
}

var a = multiplicar(4,2); //atribuindo o valor da multiplicacao de 4x2 a variavel a.
console.log(a);

var b = multiplicar(6,7);
console.log(b);

function somaValores(a,b = 2,c = 6){//podemos definir os valores iniciais de alguams variáveis, tornando-os fixos.
    var total = a + b + c;
    return total;//sempre precisamos informar o return para que ele retorne o valor da operaçao.
}
var f = somaValores(8);
console.log(f);


//funcao anonima
var infoCal = function(a,b,c){ //nesse caso não damos nome a funcao apenas para a variavel.
    return a + b + c;
}
console.log (infoCal(2,5,7))//precisamos informar somente os numeros da variavel.


//arrow function
const soma = (num1, num2) => {//chama-se arrow function porque o igual e o sinal de maior formam uma flecha
    return num1 + num2
}
console.log(soma(4,6)); 

//Arrow function com map
const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num*num);//o map auxilia a manipular dados da array, nesta funcao ele vai passar pela array multiplicando o elemento por ele mesmo e montar outra array com eles.
console.log(valores);

//deixando a primeira letra em maiusculo.
var listaProdutos = ["geladeira", "fogão", "Air fryer"];
var listaEmMaiuscula = listaProdutos.map(primeiraEmMai);

function primeiraEmMai (elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);//pega o primeiro caractere com o charAt e coloca em letra maiuscula com o toUpperCase e corta a palavra com o slice a partir da posicao 1.
}
console.log(listaEmMaiuscula);