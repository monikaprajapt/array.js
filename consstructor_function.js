function student(firstname,lastname){
this.firstname=firstname
this.lastname=lastname
this.username=function(){
    console.log(firstname,lastname)
}
}
const student1=new student("monika","prajapat")
console.log(student1)


class student{
    constructor(){
        let name;
        console.log("yes")
    }
    hello(){
        console.log("hello" + this.name)
    }
     static(){
        console.log("static function")
    }
     

}
a=new student()
a.name="monika"
a.hello();
student.staticm();



// // class student{
// //     constructor(name,age){
// //         this.firstname=name
// //         this.firstage=age
// //         console.log("yes")
// //     }
// //     hello(){
// //         console.log("hello" + this.firstname,this.firstage)
// //     }
// //     static staticm(){
// //         console.log("static function")
// //     }
     

// // }
// // a=new student("monika",22)
// // // a.name="monika"
// // a.hello();
// // student.staticm();



