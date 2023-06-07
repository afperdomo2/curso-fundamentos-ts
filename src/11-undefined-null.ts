/**
 * En TypeScript, los tipos undefined y null son dos tipos de datos
 * especiales que se utilizan para representar valores ausentes o vacíos.
 *
 * El tipo undefined se refiere a un valor que no ha sido asignado a una
 * variable o que no tiene un valor definido.
 *
 * El tipo null se utiliza para representar la ausencia intencional de un
 * objeto o valor
 */
(() => {
  let myNumber: number;
  let myString: string;

  let myNull: null = null;
  let myUndefined = undefined;

  console.log('myNumber:', myNumber);
  console.log('myString:', myString);
  console.log('myNull:', myNull);
  console.log('myUndefined:', myUndefined);

  let test: null | undefined;
  console.log('test:', test);

  // Inicializar en undefined, para después asignar otro valor
  let myAge: number | undefined = undefined;
  console.log('myAge:', myAge);
  myAge = 20;
  console.log('myAge:', myAge);

  // Inicializar en null, para después asignar otro valor
  let myPhone: number | null = null;
  console.log('myPhone:', myPhone);
  myPhone = 31190000;
  console.log('myPhone:', myPhone);

  function hi(name: string | null, lastName: string | null) {
    name ??= 'Sin nombre';
    lastName = lastName?.toUpperCase() || 'N/A';
    return `Hola ${name} ${lastName}!`;
  }
  console.log(hi('Pedro', null));
  console.log(hi(null, 'Pérez'));
})();
