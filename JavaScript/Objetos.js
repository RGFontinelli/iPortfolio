//Objetos são como uma espécie de "super variáveis" que armazenam uma "coleção de valores" referenciados por nome e podem ser recuperados para utilizar em outras partes do código.


//1 - criando objeto
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Fontinelli'
}
console.log(pessoa['sobrenome'])

//2 - criando o objeto
const funcionario = new Object();
funcionario.nome = "Nina"
funcionario.sobrenome = "Pita"

console.log(funcionario.nome);

//3 - criando objeto com função
function criarPessoa(nome, sobrenome){
    return {nome,sobrenome}
}

const p1 = criarPessoa("Arthur", "Silva", 20)
const p2 = criarPessoa("João", "Silva", 30)

console.log(p1.nome);//traz só o nome ou sobrenome dependendo do que informar depois do ponto
console.log(p2);//traz a variavel toda sinalizando nome e sobrenome.

//Montando o nome completo da pessoa dentro da funcao
function criarPessoa(nome, sobrenome, i){
    return {nome,
            sobrenome,
            idade: i,
            get nomeCompleto(){
                return `${this.nome} ${this.sobrenome}`//crase é a mesma coisa que aspas simples ou dupla, o sifrão é utilizado em jQuery.
            }
        }
}

console.log(p1.nomeCompleto);
console.log(p2);