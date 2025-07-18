// multiplicacion.test.js
const tabla_multiplicar = require('./tabla_multiplicar');

// Funcion de prueba para verificar la tabla de multiplicar

function test(desc, fn) {
  try {
    fn();
    console.log(`✅ ${desc}`);
  } catch (error) {
    console.error(`❌ ${desc}`);
    console.error(error);
    process.exitCode=1; // Indica que hubo un error en la prueba
  }
}

function assertEquals(actual, esperado){
  if (actual !== esperado) {
    throw new Error(`Error: se esperaba ${esperado}, pero se obtuvo ${actual}`);
  }
}


test('Verifica que la función tabla_multiplicar esté definida', () => {
  assertEquals(typeof tabla_multiplicar, 'function');
}); 

test('Verifica que la tabla del 2 sea correcta', () => {
  const tablas = tabla_multiplicar(2, 2); // solo la tabla del 2
  const tablaDel2 = tablas[0].tabla;
  assertEquals(tablaDel2.length, 10); // Verifica que tenga 10 elementos
  assertEquals(tablaDel2[0], '2 x 1 = 2');
  assertEquals(tablaDel2[1], '2 x 2 = 4');
  assertEquals(tablaDel2[2], '2 x 3 = 6');
  assertEquals(tablaDel2[3], '2 x 4 = 8');
  assertEquals(tablaDel2[4], '2 x 5 = 10');
  assertEquals(tablaDel2[5], '2 x 6 = 12');
  assertEquals(tablaDel2[6], '2 x 7 = 14');
  assertEquals(tablaDel2[7], '2 x 8 = 16');
  assertEquals(tablaDel2[8], '2 x 9 = 18');
  assertEquals(tablaDel2[9], '2 x 10 = 20');
});


// test('Verifica que la tabla del 2 sea correcta', () => {
//   const tablas = tabla_multiplicar(2, 2); // solo la tabla del 2
//   const tablaDel2 = tablas[0].tabla;

//   expect(tablaDel2).toEqual([
//     '2 x 1 = 2',
//     '2 x 2 = 4',
//     '2 x 3 = 6',
//     '2 x 4 = 8',
//     '2 x 5 = 10',
//     '2 x 6 = 12',
//     '2 x 7 = 14',
//     '2 x 8 = 16',
//     '2 x 9 = 18',
//     '2 x 10 = 20'
//   ]);
// });
