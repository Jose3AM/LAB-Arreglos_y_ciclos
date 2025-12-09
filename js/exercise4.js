/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

// Solución
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
if (commonCourses.length > 0) {
  console.log("Common courses:");
  commonCourses.forEach(course => console.log(course));
} else {
  console.log("No common courses found.");
}


// Código adicional para interacción con HTML, las entradas de texto simulan el arreglo.
const button = document.getElementById("button");

button.addEventListener('click', function() {
    const firstInputElements = document.querySelectorAll('.my-input');
    const sentence = document.getElementById('respuesta-el');
    
    const firstCourses = Array.from(firstInputElements).map(input => input.value);
    const commonCourses = firstCourses.filter((value, index, self) => {
        return self.indexOf(value) !== index;
    });

    if (commonCourses.length > 0) {
        sentence.innerText = 'Cursos en común: ' + commonCourses[0];
    } else {
        sentence.innerText = 'No se encontraron cursos en común.';
    }
});