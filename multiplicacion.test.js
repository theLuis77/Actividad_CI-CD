// multiplicacion.test.js
const tabla_multiplicar = require('./multiplicacion');

test('Verifica que la tabla del 2 sea correcta', () => {
  const tablas = tabla_multiplicar(2, 2); // solo la tabla del 2
  const tablaDel2 = tablas[0].tabla;

  expect(tablaDel2).toEqual([
    '2 x 1 = 2',
    '2 x 2 = 4',
    '2 x 3 = 6',
    '2 x 4 = 8',
    '2 x 5 = 10',
    '2 x 6 = 12',
    '2 x 7 = 14',
    '2 x 8 = 16',
    '2 x 9 = 18',
    '2 x 10 = 20'
  ]);
});
