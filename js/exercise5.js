/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

// Solución
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(`1. People in the list: ${people.join(' ')}`);

people.splice(1,1);
console.log(`2. People in the list: ${people.join(' ')}`);

people.splice(2,1);
console.log(`3. People in the list: ${people.join(' ')}`);

[people[0], people[1]] = [people[1], people[0]]
console.log(`4. People in the list: ${people.join(' ')}`);

people.push("Antonio");
console.log(`5. People in the list: ${people.join(' ')}`);

let output = "";
for (const newListPeople of people){
  output += newListPeople + " ";
  if (newListPeople === "Maria"){
    break;
  }
}
console.log(`6. People in the list: ${output}`);

console.log(`7. Maria index is located in: ${people.indexOf("Maria")}`);

console.log(`People in the list: ${people.join(' ')}`);


// Código adicional para interacción con HTML, las entradas de texto simulan el arreglo.
const button = document.getElementById("button1");

button.addEventListener("click", function() {
    let inputElements = document.querySelectorAll(".my-input");
    let words = [];
    for (let input of inputElements) {
        words.push(input.value);
    }
    let firstSolution = document.getElementById("respuesta-el");
    firstSolution.innerHTML = `Write a command that prints out all of the people in the list: <br><br> ${words.join(" ")}`;

    const nextSolution = document.getElementById("buttons");
    nextSolution.innerHTML = `<button id="button2">Solución 2</button> <p id="respuesta2"></p>`;
    const button2 = document.getElementById("button2");

    button2.addEventListener("click", function() {
        words.splice(1,1);
        let secondSolution = document.getElementById("respuesta2");
        secondSolution.innerHTML = `Remove "Dani" from the array: <br><br> ${words.join(" ")}`;

        nextSolution.innerHTML += `<button id="button3">Solución 3</button> <p id="respuesta3"></p>`;
        const button3 = document.getElementById("button3");

        button3.addEventListener("click", function() {
            words.splice(2,1);
            let thirdSolution = document.getElementById("respuesta3");
            thirdSolution.innerHTML = `Remove "Juan" from the array: <br><br> ${words.join(" ")}`;

            nextSolution.innerHTML += `<button id="button4">Solución 4</button> <p id="respuesta4"></p>`;
            const button4 = document.getElementById("button4");

            button4.addEventListener("click", function() {
                let fourthSolution = document.getElementById("respuesta4");
                words.unshift(words.splice(1,1)[0]);
                fourthSolution.innerHTML = `Move "Luis" to the front of the array: <br><br> ${words.join(" ")}`;

                nextSolution.innerHTML += `<button id="button5">Solución 5</button> <p id="respuesta5"></p>`;
                const button5 = document.getElementById("button5");

                button5.addEventListener("click", function() {
                    let fifthSolution = document.getElementById("respuesta5");
                    words.push("Antonio");
                    fifthSolution.innerHTML = `Add your name to the end of the array: <br><br> ${words.join(" ")}`;

                    nextSolution.innerHTML += `<button id="button6">Solución 6</button> <p id="respuesta6"></p>`;
                    const button6 = document.getElementById("button6");

                    button6.addEventListener("click", function() {
                        let sixthSolution = document.getElementById("respuesta6");
                        let output = "";
                        for (const newListPeople of words){
                          output += newListPeople + " ";
                          if (newListPeople === "Maria"){
                            break;
                          }
                        }
                        sixthSolution.innerHTML = `Iterate through this array and after console.log "Maria", exit from the loop: <br><br> ${output}`;

                        nextSolution.innerHTML += `<button id="button7">Solución 7</button> <p id="respuesta7"></p>`;
                        const button7 = document.getElementById("button7");

                        button7.addEventListener("click", function() {
                            let seventhSolution = document.getElementById("respuesta7");
                            seventhSolution.innerHTML = `The indexOf where "Maria" is located: <br><br> ${words.indexOf("Maria")}
                            <br><br> Final people in the list: <br><br> ${words.join(" ")}`;
                        });
                      });
                });
            });
        });
    });
});
