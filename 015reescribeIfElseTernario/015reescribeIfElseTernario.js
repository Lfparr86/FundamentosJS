
/*
if (login == 'Alumno') {
  message = 'Hola estudiante, tiene 10 tareas pendientes';
} else if (login == 'Profesor') {
  message = 'Buenos días, tiene que calificar 1000 actividades';
} else if (login == '') {
  message = 'Sin sesión, estudie algo';
} else {
  message = '';
}
*/

let login = "Profesor";

let ifResuelto = (login == "Alumno") ? "Hola estudiante, tiene 10 tareas pendientes" : 
(login == "Profesor") ? "Buenos días, tiene que calificar 1000 actividades" : 
(login == "") ? "Sin sesión, estudie algo":"";