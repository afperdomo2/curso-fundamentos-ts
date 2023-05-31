// Tipado de arrays
(() => {
  // 1. Tipado Inferido
  // El motor lo clasifica como un Array de tipo number
  const prices = [100, 550, 1500];
  prices.push(250);
  prices.push(parseInt('350'));
  prices.push('830');
  console.log('prices:', prices);

  // El motor lo casica como un Array de tipo number y string
  // Solo recibe ese tipo de datos
  const dates = [550, 'Pepito'];
  console.log('dates:', dates);

  // 2. Tipado Explícito

  // Array de tipo number
  const numbers: number[] = [1, 2, 3, 5];
  console.log('numbers:', numbers);

  // Array de varios tipos: string, number
  const mixed: (string | number | boolean | object)[] = [
    'Lavadora',
    1200,
    true,
  ];
  mixed.push('Estufa');
  mixed.push(1550);
  mixed.push('990');
  mixed.push(false);
  mixed.push({ name: 'Pepito', lastName: 'Perez', age: 18 });
  console.log('mixed:', mixed);
})();
