(() => {
  // 1. Agregando tipado a las propiedades de un objeto
  const login = (data: { email: string; password: string }) => {
    console.log(`Email: ${data.email}, Pass: ${data.password}`);
  };

  login({
    email: 'pruebas@gmail.com',
    password: '123123',
  });

  // 2. Ejemplo práctico
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'One Size';
  type Product = { title: string; stock: number; size?: Sizes };

  // Array de objetos de tipo: 'Product'
  // Las 2 siguientes formas son equivalentes
  const products: Array<Product> = [];
  const products2: Product[] = [];

  // Agrega el tipado de 'Product' al argumento de 'producto'
  const addProduct = (product: Product) => {
    products.push(product);
    products2.push(product);
  };
  addProduct({ title: 'Pantalon', stock: 12, size: 'L' });
  addProduct({ title: 'Camisa', stock: 3 });
  addProduct({ title: 'Cinturón', stock: 4 });
  addProduct({ title: 'Medias', stock: 4, size: 'One Size' });

  console.table(products);
  console.table(products2);
})();
