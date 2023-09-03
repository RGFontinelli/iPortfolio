//Heranca pode ser considerada um conceito chave do paradigma orientado a objetos. Ela permite que classes compartilhem atributos e métodos através de hierarquia de classes.

//Criando uma classe
class dispositivoEletronico{
    constructor (nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Já está ligado.")
            return;
        }
        this.ligado = true;
    }
}

class smartphone extends dispositivoEletronico{//o extends indica que tudo que tiver na classe dispositivoEletronico pode ser aproveitado pela classe smartphone.
    constructor(nome, cor, modelo){
        super(nome);//Aqui adicionamos mais parametros ao smartphone, mas o nome ainda usa o constructor do dispositivoEletronico, e o super serve pra indicar que está usando o nome lá da classe que indicamos.
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new smartphone("Samsung", "Preto", "A71");
console.log(s1);
s1.ligar();
s1.ligar();//precisamos chamar duas vezes o ligar para apresentar a mensagem de que ja esta ligado, porque na primeira vez ele esta como false, e o return muda para true, então quando chamamos mais uma vez ele traz a mensagem de que esta ligado.
