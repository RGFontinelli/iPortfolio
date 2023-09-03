//Criando a classe
class contaCliente{
    constructor(numeroConta, saldo, debito, credito){//o constructor é um método utilizado para criar e inicializar um objeto criado a partir de uma classe.
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }
    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito
    }
    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()//o const cria uma variavel de valor fixo, utilizada somente para leitura.
        if(saldoAtual>=0){
            alert("Saldo positivo R$ " + saldoAtual)
        }else{
            alert("Saldo negativo R$ " + saldoAtual)
        }
    }
}
//utilizando o prompt para o usuário digitar no console os valores a serem atribuidos aquelas variaveis
let numeroConta = prompt("Digite o número da conta do cliente:");
let saldo = parseFloat(prompt("Digite o saldo do cliente:"));
let debito = parseFloat(prompt("Digite o debito:"));
let credito = parseFloat(prompt("Digite o credito:"));

let conta = new contaCliente(numeroConta, saldo, debito, credito)
conta.verificarSaldo()