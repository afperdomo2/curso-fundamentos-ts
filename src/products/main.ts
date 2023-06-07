import { products, addProduct, getTotalStock } from './product.service';

addProduct({ title: 'Pantalon', stock: 12, size: 'L' });
addProduct({ title: 'Camisa', stock: 3 });
addProduct({ title: 'Cinturón', stock: 4 });
addProduct({ title: 'Medias', stock: 4, size: 'One Size' });

console.log('🖨️Print All Products:');
console.table(products);

console.log('🧮Total Stock:', getTotalStock());
