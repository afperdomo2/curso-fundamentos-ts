// Manejo de Booleanos
(() => {
  // Inferida
  let isEnable = true;
  isEnable = false;

  // Explícita
  let isNew: boolean = false;
  isNew = true;
  console.log('isNew:', isNew);

  const random = Math.random();
  console.log('random:', random);

  isNew = random > 0.5;
  console.log('isNew:', isNew);
})();
