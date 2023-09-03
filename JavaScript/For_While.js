//For loop serve para iterar (repetir) uma série de dados ao mesmo tempo. Utilizado quando sabemos o número de iterações antes de entrar no loop.
//Sintaxe: for (Condicao de inicializacao:; Condicao de teste; increment/decrement){ corpo do loop};

//For/in é utilizado para acessar as informacoes de um objeto
//Sintaxe: for (variavel in objeto){executar bloco de código};

//For/of percorre objetos iterativos chamando uma funcao personalizada com instrucoes a serem executadas para o valor de cada objeto distinto.
//Sintaxe: for(variavel of iteravel){declaracao};

//Exemplo de for/in
var carro = [{modelo: "Audi A3", marca: "Audi", ano: 2020}, 
            {modelo: "Lancer Evolution", marca: "Mitsubishi", ano: 2017}];

for(var caracteristica in carro){
    console.log(carro[caracteristica]);
}

//Exemplo de forOf pegando o ano do carro (bom para pegar propriedade de um array)
for (var c of carro){
    console.log(c.ano);
}


//While um laço que executa um bloco de código enquanto uma condição for verdadeira.
//Sintaxe: while(condition){code block to be executed};

//doWhile executa o do enquanto a informação for verdadeira e pelo menos uma vez mesmo que a info nao seja verdadeira, após identificar que é falsa passa para fora do doWhile.
//Sintaxe: do{declaracoes} while (condicoes);


//Exemplo de while
var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}

//Exemplo de doWhile (vai fazer o do enquanto t menor que 5, e executa o do uma vez mesmo que o t seja maior que 5 já na primeira vez)
var t = 1;
do {
    console.log(t);
    t++;
} while (t<5);

//forIn apresentando os carros.
const cars = [

    { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
];
for (let indice in cars) {
    console.log('Carro ' + (parseInt(indice) + 1) + ':');
    for (let atributo in cars[indice]) {
    console.log(atributo + ': ' + cars[indice][atributo]);
    }
    console.log('-----');
}

//Soma os números que sao divisiveis por 2, ou seja, numeros pares
const numeros = [2, 4, 6, 8, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
if (numeros[i] % 2 === 0) {
    soma += numeros[i];
}
}
console.log(soma);