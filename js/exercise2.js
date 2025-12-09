/*
Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

// Solución
let myArray = [1, 2, 4, 5];
const myNewArray = myArray.map((index) => index * 2);
console.log(`Entrada: ${myArray}`);
console.log(`Salida: ${myNewArray}`);


// Código adicional para interacción con HTML, las entradas de texto simulan el arreglo.
const button = document.getElementById("button");

button.addEventListener("click", function() {
    const inputElements = document.querySelectorAll(".my-input");
    const answer = document.getElementById("respuesta-el");
    const numbers = [];
    
    for (const input of inputElements) {
        numbers.push(Number(input.value) * 2);
    }
    
    answer.textContent = `El resultado multiplicado por 2 es: ${numbers.join(" ")}`;
});