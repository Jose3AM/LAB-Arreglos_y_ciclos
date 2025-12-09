/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

// Solución
let myArray = [1, 2, 3, 4];
const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
const product = myArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1,);
console.log(`The sum is: ${sum}, The product is: ${product}`);


// Código adicional para interacción con HTML, las entradas de texto simulan el arreglo.
const button = document.getElementById("button");

button.addEventListener("click", function() {
    const inputElements = document.querySelectorAll(".my-input");
    const answer = document.getElementById("respuesta-el");
    const numbers = [];

    for (const input of inputElements) {
        numbers.push(Number(input.value));
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    answer.textContent = `La suma de los números es: ${sum}, El producto de los números es: ${product}`;
});