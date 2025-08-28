
class Fornecedor { 
    let nome;
let fone;

//método contrutor
constructor(nome = "Sem Nome", fone = "(00)00000-0000"){
    this.nome = nome;
    this.fone = fone;
}
setNome(nome){
    this.nome = nome;
}
setNome(fone){
    this.nome = nome;
}

//criando os getters
getNome(){
    return this.nome;
}
getFone(){
    return this.nome;
}


}

//testando a classe Fornecedor

console.log ("Testando a Classe Fornecedor")

//criando um objeto(instância)
//com os dados iniciais

//criar a variável
const f1=new Fornecedor("tecidos & cia", "(11)22333-4455")














//atibutos e variaveis comuns