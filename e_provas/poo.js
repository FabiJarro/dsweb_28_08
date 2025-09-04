class Person{
    constructor(firstname, lastname, idade){
        this.firstname=firstname
        this.lastname=lastname
        this.idade=idade

    }

    getFullName(){
        return `${this.firstname}+${this.lastname}`;}

    static speak(){
        console.log("Hello world")
    }
    //método estático


    
}

const person=new Person("Jane", "Silva", 40);

console.log(person)
Person.speak()