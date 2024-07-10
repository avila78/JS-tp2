// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaFinal = 1;

do {
  const numeroIngresado = parseInt(prompt("Ingrese un número"));
  sumaFinal = sumaFinal + numeroIngresado;
  console.log(sumaFinal);
} while (confirm("¿Desea continuar?"));

document.write(`Total: ${sumaFinal}`);
