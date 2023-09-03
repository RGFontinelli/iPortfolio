//Exeception é um objeto que rtepresenta uma condição anormal que ocorre durante a execução de um programa.
function realizarDivisao(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}

const resultado1 = realizarDivisao(10, 2);
console.log(resultado1); // Isso imprimirá 5 no console

const resultado2 = realizarDivisao(8, 0);
console.log(resultado2); // Isso imprimirá "Divisão por zero não é permitida" no console

//Checando se os numeros de um array sao todos positivos
function checkPositive(numeros){
    if(!Array.isArray(numeros)){
        throw new Error("O argumento deve ser de um array")
    }
    const allPositive = numeros.every((num) => num > 0);
    if(!allPositive){
        throw new Error ("O array deve conter apenas numeros positivos.");
    }
    return true
}
try{
    const numbers = [1,2,3,4,5,6]
    const isPositive = checkPositive(numbers)
    console.log(isPositive)
}catch(error){
    console.log ("Ocorreu um erro: ", error.message)
}