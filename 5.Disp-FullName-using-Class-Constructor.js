//Define Person class with parameter firstName and lastName. 
//Write a function fullName() inside function object to return 
//fullName of that person. (Using constructor function)

class Person{
    constructor(fname , lname) {
        this.fname = fname;
        this.lname = lname;
    }

    fullName() {
        return (this.fname + " " + this.lname);
    }
}

var personObj = new Person('John','kim');
var op = personObj.fullName();

console.log(op);