(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    stock: number,
    size: Sizes,
    createdAt: Date
  ) {
    return { title, stock, size, createdAt };
  }

  const product1 = createProductToJson('Pan', 12, 'XL', new Date());
  console.log('producto1:', product1);
  console.log('title:', product1.title);
  console.log('stock:', product1.stock);

  // ? = El tipado se vuelve opcional
  const createProductToJsonV2 = (
    title: string,
    stock: number,
    size?: Sizes,
    createdAt?: Date
  ) => {
    return { title, stock, size, createdAt };
  };

  const product2 = createProductToJsonV2('Pan', 12);
  console.log('producto1:', product2);
})();
