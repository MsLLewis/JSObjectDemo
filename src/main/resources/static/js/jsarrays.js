function  modifyArray(){
    //create an array using the new Array() syntax
    let birds = new Array("Cardinal", "Bluejay", "Thrasher", "Dove");

    //Read from the array using a for loop
    document.write("Reading from the array " + "<br>");
    for(let i=0; i< birds.length; i++){
        document.write(birds[i] + "<br>");
    }
    document.write("<br>");

    //Write to the array using for loop
    document.write("Writing to the array " + "<br>");
        for(let i = 0; i<birds.length; i++){
            birds[i] = birds[i].toUpperCase();
            document.write(birds[i] + "<br>")
        }

      document.write("<br>");

        //PUSH an element to the array using a for loop
      document.write("Adding an element to the array " + "<br>");
      birds.push("Humming Bird");
      birds.push("Mocking Bird");
      birds.push("Canary");
      document.write("<br>");

    //Read to see updated birds array
    document.write("\nUpdated array:" + "<br>");
    document.write(birds + "<br>");

    document.write("<br>");

    //POP removes last element
    document.write("Last element removed" + "<br>");
    birds.pop();
    for(let i=0; i< birds.length; i++){
        document.write(birds[i] + "<br>");
    }

    document.write("<br>");
//SHIFT removes first element
    document.write("First element removed" + "<br>");
    birds.shift();
    for(let i=0; i< birds.length; i++){
        document.write(birds[i] + "<br>");
    }

    document.write("<br>");

    //JOIN birds into new joinBirds
    document.write("Join birds" + "<br>");
    const joinBirds = birds.join(" ");
    for(let i=0; i< joinBirds.length; i++){
        document.write(joinBirds[i]);
    }
     document.write("<br>");

    //REVERSE AND JOIN BIRDS
    document.write("Reverse and Join Birds" + "<br>");
    let crazyBirds = birds.reverse().join();
    for(let i=0; i< crazyBirds.length; i++){
        document.write(crazyBirds[i]);
    }
    document.write("<br>");
    document.write("<br>");

    //SORT BIRDS
    document.write("Sorting Birds" + "<br>");
    document.write(birds.sort() + "<br>");

    document.write("<br>");
    document.write("<br>");

    //SPLICE BIRDS
    document.write("Splicing Birds - Remove" + "<br>");
    birds.splice(1,1)  //Removes 1 element starting from index 1
    document.write(birds + "<br>");

    document.write("<br>");
    document.write("<br>");

    //USE SPLICE() to INSERT ELEMENTS
    document.write("Splicing Birds - Insert" + "<br>");
    birds.splice(1, 0, "Eagle","Parrot");  //Insert Eagle and Parrot at index 1
    document.write(birds + "<br>");

    document.write("<br>");
    document.write("<br>");

}