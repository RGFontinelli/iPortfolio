//if...else estrutura condicional que executa a afirmação, dentro do bloco, se determinada condicao for verdadeira. Se for falso, executa a chave do else.

var pais = "Brasil";

if(pais !="Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro");
}

var idade = 22;

if(idade < 16){
    console.log("Não vota");
}else if (idade <18){
    console.log("Voto opcional");
}else{
    console.log("Voto obrigatório");
}


let totalCompra = 150;
let desconto ="";

if(totalCompra>200){
    desconto ="20%"
}else if(totalCompra>100){
    desconto = "10%";
}else if(totalCompra>50){
    desconto = "5%";
} else {
    desconto = "Sem desconto";
}
console.log(desconto);