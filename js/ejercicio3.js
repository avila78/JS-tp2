/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let fraseFinal = "";

do {
    const palabraIng = prompt("Ingrese una palabra o frase");
    fraseFinal = fraseFinal + '-' + palabraIng;
}
while (confirm ("¿Desea continuar?"))

document.write(`Frase ingresada: ${fraseFinal}`)
