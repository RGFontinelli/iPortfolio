//Criar uma funcao de uma pessoa com peso e altura, fazer o cálculo do IMC e indicar qual a classificação da pessoa de acordo com o resultado obtido.

function criarPessoa(nome, sobrenome, altura, peso){
    return {nome,
            sobrenome,
            altura,
            peso,
            calculoImc(){
                const indice = this.peso/(this.altura**2).toFixed(1)//this utilizado para indicar qual variavel vai utilizar dentro da funcao, o double ** significa exponencial, e o toFixed serve para indicar quantas casas depois da virgula utilizar.
                if(indice<18.5){
                    console.log("Abaixo do peso")
                }else if (indice>=18.5 && indice<24.9){
                    console.log("Peso normal")
                }else if(indice >= 25 && indice < 29.9){
                    console.log("Acima do peso")
                }else if (indice >= 29.9 && indice < 34.9){
                    console.log("Obesidade 1")
                }else if (indice >= 34.9 && indice < 39.9){
                    console.log("Obesidade 2")
                }else if (indice >= 39.9){
                    console.log("Obesidade 3")
                }
            }
        }
}

const p1 = criarPessoa("Rafael", "Fontinelli", 1.74, 86);
p1.calculoImc();