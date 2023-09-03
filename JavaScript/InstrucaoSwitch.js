//switch avalia uma expressão, combiando do valor da expressão para uma cláusula case, e xecuta as instruções associadas ao case.
var diaSem = 7;

switch(diaSem){
    case 1:
        console.log("Domingo");
        break; //é sempre importante colocar o break, porque se não, quando o código bater o valor que a variável está trazendo com o case, ele vai imprimir todas as outras infos abaixo.

    case 2: 
    console.log("Segunda");
    break;//quando o case é executado, o break pula para fora do switch e continua a execução do código.

    case 3:
    console.log("Terça");
    break;

    default: //o default é parecido com o else do if, se nenhuma das informações anteriores for verdadeira ele executa o que escrevemos abaixo dele.
        console.log("Esse dia da semana não existe.");
}

var livro = "O Senhor dos Anéis";
var localizacao = "";

switch(livro){
    case "Harry Potter":
        localizacao = "Prateleira A";
        break;
    case "Percy Jackson":
        localizacao = "Prateleira B";
        break;
    case "O Senhor dos Anéis":
        localizacao = "Prateleira C";
        break;
    default:
        localizacao = "Localização não encontrada.";
}
    console.log("O livro " + livro + " está na "+localizacao);



//Atividade prática da aula 6 de JavaScript.
    var opcao = "";
    var valor ="";

    switch(opcao){
        case "Café":
            valor = 1.50;
            console.log("A bebida escolhida foi " + opcao + " e o valor a ser pago é: " + valor + " .");
        break;
        case "Leite":
            valor = 3.00;
            console.log("A bebida escolhida foi " + opcao + " e o valor a ser pago é: " + valor + " .");
        break;
        case "Chá":
            valor = 2.00;
            console.log("A bebida escolhida foi " + opcao + " e o valor a ser pago é: " + valor + " .");
        break;
    default:
        valor = "A opção selecionada deve ser Chá, Leite ou Café.";
        console.log(valor);
    }
    