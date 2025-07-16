// multiplicacion.js
function tabla_multiplicar(inicio = 2, fin = 11, hasta = 10) {
  let resultado = [];

  for (let numero = inicio; numero <= fin; numero++) {
    let tabla = [];
    for (let i = 1; i <= hasta; i++) {
      tabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    resultado.push({
      numero,
      tabla
    });
  }

  return resultado;
}

module.exports = tabla_multiplicar;
