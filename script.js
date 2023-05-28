function verificarParidad() {
  var numero = prompt("Introduce un número:");
  
  if (numero !== null) {
    numero = parseInt(numero);
    
    if (isNaN(numero)) {
      alert("Por favor, introduce un número válido.");
    } else {
      if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
      } else {
        alert("El número " + numero + " es impar.");
      }
    }
  }
}
