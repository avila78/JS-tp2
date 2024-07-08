const edad = parseInt(prompt("Ingrese su edad"));

if (isNaN(edad)) {
  document.write(
    "Alguno de los caracteres ingresados no es correcto. Por favor ingrese su edad en números"
  );
} else if (edad > 17 && edad <= 100) {
  document.write("Ud ya puede conducir");
} else if (edad > 100) {
  document.write("por favor ingrese una edad valida");
} else {
  document.write("Ud todavia no puede conducir");
}

isNaN(nombrevariable);
