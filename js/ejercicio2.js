/* Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

const nota = parseInt(prompt("Ingrese la nota obtenida (de 0 a 10)"))

if (isNaN(nota)) {alert ("Los caracteres ingresados no corresponden a un número válido. Por favor refrersque e ingrese la nota obtenida (de 0 a 10)")}
else { 
  switch(nota){
    case 0:
    case 1:
    case 2:
      alert("Calificación: Muy deficiente");
      brake;
    case 3:
    case 4:
      alert("Calificación: Insuficiente");
      brake;
    case 5:
    case 6:
      alert("Calificación: Suficiente");
      brake;
    case 7:
      alert("Calificación: Bien");
      brake;
    case 8:
    case 9:
      alert("Calificación: Notable");
      brake;
    case (10):
      alert("Calificación: Sobresaliente");
      brake;
    default:
      alert("La nota ingresada es incorrecta. Por favor refrersque e ingrese la nota obtenida (de 0 a 10)")
  }
}
