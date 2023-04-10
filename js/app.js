/*Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */

const inputTarea = document.getElementById("inputTarea");
let btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const titulo =  document.getElementById("titulo");
// Agregar evento click al botón "Agregar"
btnAgregar.addEventListener("click",Agregarlista);

function Agregarlista() {
  // Obtener el valor del input
  const tarea = inputTarea.value;
  // Crear el elemento de la lista
  const elementoLista = document.createElement("li");
  elementoLista.textContent = tarea;
  // Agregar un botón para eliminar el elemento de la lista
  const btnEliminar = document.createElement("button");
  btnEliminar.className="mt-2 ms-3 botonEdit"
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", function() {
    elementoLista.remove();
  });
  elementoLista.appendChild(btnEliminar);
  // Agregar el elemento a la lista
  listaTareas.appendChild(elementoLista);
  // Limpiar el contenido del input
  inputTarea.value = "";
};

// Agregar evento click a cada elemento de la lista para eliminarlo
listaTareas.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.remove();
  }
});