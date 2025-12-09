/*
Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/

// Solución
const algoritmoBurbuja = entrada => {
for (let i = 0; i < entrada.length - 1; i++) {
  for (let j = 0; j < entrada.length - 1 - i; j++){
      if (entrada[j] > entrada[j + 1]){
      [entrada[j], entrada[j + 1]] = [entrada[j + 1], entrada[j]];
      }
  }
}
return entrada;
}

let entradaArray = [3, 6, 12, 5, 100, 1];
console.log(algoritmoBurbuja(entradaArray));


// Código adicional para interacción con HTML, las entradas de texto simulan el arreglo.
const button = document.getElementById("button");

button.addEventListener("click", function() {
    const inputElements = document.querySelectorAll(".my-input");
    const answer = document.getElementById("respuesta-el");
    const numbers = [];

    for (const input of inputElements) {
        numbers.push(Number(input.value));
    }
    
    algoritmoBurbuja(numbers);
    answer.textContent = `Resultado: ${numbers.join(" ")}`;
});