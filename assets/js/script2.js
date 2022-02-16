const myNum = Number(prompt("Por favor ingrese número entre el 1 y el 20"))
// Validación de datos
if (myNum > 20 || myNum < 1 || isNaN(myNum) ) {
  alert("Valor ingresado no válido");
}
// Función que imprime la multiplicación
const multiply = (q) => {
  for (let i = 0; i <= q; i++) {
    console.log(`${i} x ${q} = ${i * q}`);
  }
};
// Función que calcula el factorial de cualquier número
const factorial = (n) => {
  let result = 1;
  if (n == 1) {
    return result;
  } else {
    for (var i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
};
// Función que imprime el factorial de cada número hasta llegar al valor ingresado
const iteration = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(`El factorial de ${i} es : ${factorial(i)}`);
  }
};

multiply(myNum);
iteration(myNum);
