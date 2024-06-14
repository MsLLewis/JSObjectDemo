//Class declaration
class APerson{
    static species = "Human";

    constructor(firstName, lastName, age, eyeColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.years = age;
        this.eyeColor = eyeColor;
    }

    static greet(){
        //Math random() static method
        if(Math.random() <= 0.5){
            document.write("Hello" + "<br>");
        }else {
            document.write("Hi" + "<br>");
        }
    }

}

    const myMom = new APerson("Jane", "Doe", 30, "blue-gray");

    document.write(myMom.species + "<br>");  //undefined
    document.write(APerson.species + "<br>");  //Human

    APerson.greet(); //display either Hello or Hi


class BPerson{
    #firstName; #lastName; #years; #eyeColor;


    constructor(firstName, lastName, age, eyeColor){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#years = age;
        this.#eyeColor = eyeColor;
    }

    get name(){
        return this.#firstName + " " + this.#lastName;
    }

     set age(new_age){
        this.#years = new_age;
    }
    get age(){
        return this.#years;
    }
}

const mySister = new BPerson("Tracy", "Smith", 29, "brown");
document.write(mySister.firstName + "<br>");  //undefined
document.write(mySister.lastName + "<br>");     //undefined
document.write(mySister.name + "<br>"); //Tracy Smith


class Learner extends BPerson{
    #grades = [];

    set grade(new_grade){
        this.#grades.push(new_grade);
    }

    get average(){
        let total = 0;
        for(let i = 0; i<this.#grades.length; i++){
            total += this.#grades[i];
        }
        return Math.round(total/this.#grades.length);
    }

}

const myUncle =  new Learner("Richard", "Sawyers", 70, "brown");

myUncle.grade = 100;
myUncle.grade = 85;
myUncle.grade = 96;

document.write(myUncle.average + "<br>");
document.write(myUncle.name + "<br>");

