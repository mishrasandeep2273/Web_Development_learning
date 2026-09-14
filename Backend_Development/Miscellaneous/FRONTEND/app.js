// let arr = [1,2,3];
// let arr2 = [1,2,3];
// arr.sayHello = () => {
//     console.log("hello!, i am arr")
// }

// arr2.sayHello = () => {
//     console.log("hello!, i am arr")
// }




// function PersonMaker(name,age){ // factory function
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`hi my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("adam",25)
// let p2 = PersonMaker("eve",25)





// Constructor = doesn't return anything & start with capital
// function Person(name,age){ 
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi my name is ${this.name}`);
// }

// let A1 = new Person ("adam",25);
// let A1 = new Person ("eve",25);





// class Student {             // Creating a class
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     displayInfo() {
//         console.log("Name:", this.name);
//         console.log("Age:", this.age);
//     }
// }
// const student1 = new Student("Rahul", 20); // Creating an object
// student1.displayInfo();   // Calling method








class Person{
    Constructor(name , age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;

    }
    talk(){
        console.log(`Hi I am ${this.name}`);
    }
}

class Student extends Person{
    Constructor(name , age , marks){
        console.log("student class constructor");
        super(name , age); // parent class constructor is being called
        this.marks = marks;
    }
}
let stu1 = new Student("adam",25,95);
stu1.talk();

class teacher extends Person{
    Constructor(name , age , subject){
        console.log("teacher class constructor");
        super(name , age); // parent class construtor is being called 
        this.subject = subject;
    }
}
let teacher1 = new teacher("eve",32,"english");


// class Mammal{ // base class / parent
//     constructor(name){
//         this.name = name;
//         this.type = "warm-blooded";
//     }

//     eat(){
//         console.log("I am eating");
//     }

// }

// class Dog extends Mammal{//child
//     constructor(name){
//         super(name);
//     }

//     bark(){
//         console.log("wooff..");
//     }
// }


// class Cat extends Mammal{
//     constructor(name){
//         super(name);
//     }

//     meow(){
//         console.log("meow...");
//     }
// }





// class Student {
//     Constructor(name , age , marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk(){
//         console.log(`Hi I am ${this.name}`);
//     }
// }

// let stu1 = new Student("sandeep",17,49);
// stu1.talk();


// class Teacher {
//     Constructor(name , age , subject){
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//     talk(){
//         console.log(`Hi I am ${this.name}`);
//     }
// }

