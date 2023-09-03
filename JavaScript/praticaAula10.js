//Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.
//Você precisa criar as classes Funcionario, Gerente e Desenvolvedor. A classe Funcionario deve ter os atributos nome, idade e cargo, além dos métodos seApresentar() e trabalhar(). A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar(). Já a classe Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional linguagem, além do método programar().
//Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos. Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.

//Criando a classe funcionario
class Funcionario{
    constructor (nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(){//método apresentando o funcionário
        console.log(`Oi, me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }
    trabalhar(){//método apresentando o cargo em que trabalha
        console.log(`Trabalho como ${this.cargo}`);
    }
}

//Criando a classe gerente que vai herdar a classe funcionario
class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
    super(nome, idade, cargo);//indicando quais parametros vai herdar da classe funcionario.
    this.departamento = departamento; //definindo o parametro departamento.
}
//criando o método gerenciar()
    gerenciar(){
    console.log(`E gerencio o departamento de ${this.departamento}`);
}
}

//Criando a classe desenvolvedor que vai herdar a classe funcionario e ter um atributo chamado linguagem e método programar().
class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }
    //criando o método programar()
    programar(){
        console.log(`E utilizo a linguagem ${this.linguagem} para programar`)
    }
}

//Implementando as classes e criando instancias de gerente e desenvolvedor
const gerente1 = new Gerente ("Rafael", 25, "Gerente de projetos", "Front-End");
const desenvolvedor1 = new Desenvolvedor ("Miguel", 22, "Analista de sistemas", "Java Script");

//Chamando os métodos de Gerente e Desenvolvedor
gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

desenvolvedor1.seApresentar();
desenvolvedor1.trabalhar();
desenvolvedor1.programar();

console.log("Desenvolvido por RafaTheBug.")