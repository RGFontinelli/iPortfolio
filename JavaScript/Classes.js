//Classes são modelos que utiliamos para representar objetos do mundo real. Dentro dela declaramos atributos e métodos que representam as caracteristicas e comportamentos desse objeto.
//Objetos podem estar dentro das classes
//Para chamar uma classe precisamos instanciar um objeto. 
//Sintaxe uno = Carro()

//Getters e Setters são usados para proteger seus dados.

//Criando uma classe
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;//o this se refere ao objeto que está sendo referenciado, que nesse caso é  o nome e sobrenome.
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("Olá " + this.nome);
    }
    get nomeCompleto(){
        console.log("Olá " + this.nome + " " + this.sobrenome);
    }
}

p1 = new Pessoa("Fabio", "Silva");//atribuindo a p1 a classe pessoa. Para chamar outra pessoa precisamos de um p2 ou alguma outra variavel.
p1.falar();//chamando o metodo falar para dizer "Ola + o nome da pessoa indicado no primeiro elemento do p1".
p1.nomeCompleto; //Quando estamos chamando a variavel do get, não precisamos utilizar o parenteses igual o do falar.


