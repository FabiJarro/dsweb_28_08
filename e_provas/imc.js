class Gestante{
    constructor(nome, peso, altura){
        this.nome=nome;
        this.peso=peso;
        this.altura=altura;
        // this.imc=imc
    
    }

    imc(){
        return this.peso/(this.altura*this.altura);
    }

    mostrarIMC(){
        return `IMC: ${this.imc()}`
    }
}

const imcGestante=new Gestante('maria', 50, 1.60)
console.log(imcGestante.mostrarIMC())