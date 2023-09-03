//Strings são variáveis do tipo texto utilizamos aspas duplas ou simples para indicar que um valor é um texto.
//Sintaxe var = "" ou var = '';

//Concatenando strings
var nome = "Rafael"
var sobreNome = ' Fontinelli'
var nomeCompleto = nome + sobreNome; //primeira opcao;
var x = nomeCompleto.length // se colocar no console vai trazer o tamanho da variavel nome. Ele tambem conta os espacos.

console.log (nomeCompleto);
console.log("Tamanho da String é:",x);

resultado = x > 15 ? " Obrigado" : "Por favor coloque seu nome completo";//o interrogacao é para verificar se uma informação é verdadeiram se sim ele traz o obrigado se não, utilizamos os dois pontos e trazemos a segunda mensagem.
console.log(resultado);

//Imprimindo a variavel nome em caixa alta
var nomeMaiusculo = nome.toLocaleUpperCase()
console.log(nomeMaiusculo);

//Descobrindo a partir de que posicao comeca uma palavra
var jogo = "Barcelona vs Real Madrid";
var posicao = jogo.indexOf("Real");
console.log(posicao);

var cortado = jogo.slice(0,9); //o slice corta uma palavra da frase para trazer no console, o primeiro elemento indica a posicao que comeca a cortar e o segundo quantas posicoes vai cortar
console.log(cortado);

var val = jogo.includes("Real"); //procura uma palavra no texto indicado. Traz true ou false.
console.log(val);

var str1 = "Hello";
var str2 = " World";
var str3 = str1.concat(str2); //Funçao para concatenar textos.
console.log(str3);

var frase = "      Olá você está na aula de JsCript       "
console.log(frase.trim()); // o trim tira os espacos do comeco e do fim.

//Exemplo do split que tranforma string em array
var num = "1,2,3,4,5,6";
var arr = num.split (",") //o split vai pegar todos os itens antes e depois da virgula e tranformar em elementos independentes e uma array.
console.log(arr);

//Exemplo de substring, substituindo uma palavra de uma tring
var hello = "Olá mundo";
if(hello.startsWith("Olá")){
    var sub = hello.substring(4);
    var novaString = sub.replace("mundo","pessoal");
    var novaStringMai = novaString.toUpperCase();
    console.log(novaStringMai);
}

var hi = "Olá mundo";
var newhi = hi.replace("mundo", "pessoal");//replace substitui um valor ou texto informado na variavel por outro que desejar, informar primeiro o texto/valor a ser substituido e no segundo parametro o novo texto/valor.
console.log(newhi);


//aplicando os métodos aprendidos
var url = "https://aulas.descomplica.com.br/graduacao/analise-e-desenvolvimento-de-sistemas/turma/desenvolvimento-dinamico-7hy9l/aula/strings-zplhe";
const parametros = url.split("-")[1];//vai trazer a segunda posicao do que tiver no texto apos o "-"
console.log(parametros);
const valores = parametros.split("turma");

for (var i = 0; i < valores.length; i++){
    if(valores[i].startsWith("desenvolvimento")){
        valores[i] = "desenvolvimento" + valores[i].substring(5).toUpperCase();
    }
}
console.log(valores);