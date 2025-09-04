class Carro{
    constructor(marca,modelo, ano){
        this.marca=marca//atributo
        this.modelo=modelo//atributo
        this.ano=ano//atributo
        
    }

    //metodo
    detalhesDoCarro(){
        return`Carro: ${this.marca}, ${this.modelo}, ${this.ano}`;

    }


}

    //criando uma instancia da classe Carro
    const meuCarro=new Carro('Toyota', 'Corolla', '2020')

    console.log(meuCarro.detalhesDoCarro());


