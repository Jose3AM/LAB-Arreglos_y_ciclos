/*
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();

Complete the function to print out the string: This is a sentence.
*/

// Solución en consola
let arr = ["This", "is", "a", "sentence"];
function printOutString() {
  console.log(arr.join(' '));
}

printOutString();


// Código adicional para interacción con HTML, las entradas de texto simulan el arreglo.
const button = document.getElementById("button");

button.addEventListener("click", function() {
    const inputElements = document.querySelectorAll(".my-input");
    const sentence = document.getElementById("respuesta-el");
    const words = [];

    for (const input of inputElements) {
        words.push(input.value);
    }

    if (/\s/.test(words)) {
        sentence.innerHTML = `⚠️ Error, por favor: ⚠️ <br> Solo coloca una palabra en cada cuadro. 
        <br> No dejar cuadros vacíos.
        <br> No usar espacios en las palabras.`;
    } else {
        sentence.textContent = `Resultado: ${words.join(" ")}`;
    }
    
});