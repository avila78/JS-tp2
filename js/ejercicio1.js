const edad = parseInt(prompt("Ingrese su edad"));

if (edad > 17 && edad <= 120) {
  document.write("Ud ya puede conducir");
} else if (edad > 120) {
  document.write("por favor ingrese una edad valida");
} else {
  document.write("Ud todavia no puede conducir");
}
