class person{
    constructor(name){
    this.name=name
    }

get personname(){
    return this.name

}
set personname1(x){
    return this.name=x
}
}
person1=new person("monika")
console.log(person1.name)
person1.personname1="so"
console.log(person1.name)
