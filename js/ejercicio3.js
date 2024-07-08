/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

const fraseFinal = prompt("Ingrese una palabra o frase")

do{ document.write(fraseFinal)}
while (fraseFinal = fraseFinal + fraseFinal+1)
