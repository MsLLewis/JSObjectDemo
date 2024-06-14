const person ={
    first_name: "Luke",
    last_name: "Lance",
    age: 23
};

function displayPersonInfo(person){
    //objectName.propertyName
    document.write(person.first_name, " ", person.last_name, " ", person.age, "<br>");

    //objectname.property["propertyName"]
    document.write(person["first_name"], " ", person["last_name"], " ", person["age"], "<br>");

    //objectName[Expression]
    x ="age";
    document.write(person[x], "<br>");

    //converted person object to an array
    const myArray = Object.values(person)
    document.write(myArray, "<br>");

    //delect a property from person object
    delete  person.age;
    const theArray = Object.values(person)
    document.write(theArray , "<br>");


}
//displayPersonInfo(person);

function createPersonWithFuncProp(){
    const student = {
        firstName : "Lisa",
        lastName : "Jones",
        id: 1234,
        fullName: function (){
            return this.firstName + " " + this.lastName + " " + this.id;
        }
    };
    document.write(student.fullName())
}
//createPersonWithFuncProp()

function createStudentObjLiteral(){
    const  student = {
        firstName : "Jane",
        lastName: "Doe",
        age: 30,
        class: "Java Developer"
    };
    document.write(student.firstName, " ", student.lastName, " ", student.age, " ", student.class, "<br>");
    student.score = "90%";  //add new property

    //convert to array
    const myArray = Object.values(student);
    document.write(myArray + "<br>");
}
//createStudentObjLiteral();

function createPersonObject(){
    let person = new Object();
    person.firstName = "Mary";
    person.lastName = "Frances";
    person.age = 30;
    person.eyeColor = "blue-gray";

    for(let  o in person){
        document.write(o + " : " + person[o] + "<br>");
    }

}
//createPersonObject();
//person constructor
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName =last;
    this.age = age;
    this.eyeColor = eye;
    this.introduce = function (){
        document.write(this.firstName, " ", this.lastName, " is ", this.age, " years old with ", this.eyeColor, " eyes." , "<br>" );
    };
}
/*
//create and display object using constructor
const mother = new Person("Sally", "Rally", 48, "blue-gray");
const father = new Person("Dean", "Howard", 50, "brown");
document.write(mother.firstName, " ", mother.lastName, " ",mother.age + " " + mother.eyeColor, "<br>");
document.write(father.firstName, " ", father.lastName, " ", father.age + " " + father.eyeColor, "<br>");

mother.introduce();

father.birthday = "June 15th";  //adding property to object
document.write("</br>", father.firstName, " ", father.lastName, " ", father.age + " " + father.eyeColor, " ", father.birthday, "<br>");

// //attempting to add a property to constructor
// Person.prototype.species = "Human";
// document.write(father.species);


//Using the _proto_ property to use with another object


const brother = new Person("Jane", "Doe", 22, "blue-gray");
brother.species = "Goblin";
Person.prototype.species = "Human";
document.write(father.species + "<br>");
document.write(brother.species + "<br>");
//document.write(brother.__proto__.species + "<br>");
document.write(Object.getPrototypeOf(brother).species);

 */

function createDates(){
    // new Date()
    const d = new Date();
    document.write(d + "<br>");
// new Date(year, month, ...)
    const d2 = new Date(2021,11,24,10,33,30,0);
    document.write(d2+ "<br>");
    const d3 = new Date(2021, 11, 24);
    document.write(d3+ "<br>");
// new Date(dateString)
    const d4 = new Date("October 13, 2021 11:13:00");
    document.write(d4+ "<br>");
// new Date(milliseconds)
    const d5 = new Date(86400000);
    document.write(d5+ "<br>");

    const str = "23";
    const num = Number(str);
    document.write(typeof num , "<br>");
}
//createDates();


function useMath(){
    document.write(Math.PI + "<br>");            // returns 3.141592653589793
// Math.round(x)          returns the value rounded to its nearest integer
    document.write(Math.round(4.7)+ "<br>");    // returns 5
    document.write(Math.round(4.4)+ "<br>");    // returns 4
// Math.pow(x, y)      returns the value of x to the power of y
    document.write(Math.pow(8, 2)+ "<br>"); // returns 64
// Math.sqrt(x)           returns the square root of x:
    document.write(Math.sqrt(64)+ "<br>");     // returns 8
// Math.ceil(x)           returns the value rounded up to nearest integer
    document.write(Math.ceil(4.4)+ "<br>"); // returns 5
// Math.floor(x)          returns the value rounded down to nearest integer
    document.write(Math.floor(4.7)+ "<br>");


    const min = 5;
    const max = 10;
    let value = Math.floor(Math.random() * (max - min + 1) + min);
    document.write( "Randome value: " + value + "<br>");
}
//useMath();

function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
document.write(randomWholeNumber(5, 10) + "<br>"); 	// numbers from 5 to 10
document.write(randomWholeNumber(7, 42)+ "<br>"); 	// numbers from 7 to 42
document.write(randomWholeNumber(1, 100)+ "<br>"); 	// numbers from 1 to 100
document.write(randomWholeNumber(-10, 10)+ "<br>"); 	// numbers from -10 to 10
document.write(randomWholeNumber(-4, 20)+ "<br>"); 	// numbers from -4 to 20


