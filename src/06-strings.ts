// Tipado de Strings
(() => {
  // Inferido
  let nombre = 'Pepito';

  // Explícita
  let fullName: string = 'Pepito Perez';
  fullName = 'Margarita Fernandez';
  console.log('fullName:', fullName);
})();
