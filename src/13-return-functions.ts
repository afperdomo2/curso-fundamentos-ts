// Tipos de datos para el return de las funciones
(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((acc, price) => (acc += price), 0);
  };
  const rta1 = calcTotal([2, 10, 5, 6]);
  console.log('rta1:', rta1);

  // Void: No hay return
  const printTotal = (prices: number[]): void => {
    const total = calcTotal(prices);
    console.log('Total:', total);
  };

  printTotal([2, 20, 40]);
})();
