/**
 * Cuando se utiliza ts-check en un archivo JavaScript, se le indica al
 * compilador de TypeScript que realice una verificación de tipo estático
 * en ese archivo, incluso si el archivo no tiene una extensión .ts o .tsx.
 * Esto permite aprovechar las capacidades de verificación de tipos de
 * TypeScript en archivos JavaScript existentes, sin necesidad de convertirlos
 * completamente a TypeScript.
 */

//@ts-check

() => {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch("http://api.escuelajs.co/api/v1/products", {
      method: "GET",
    });
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }

  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.info(total);
  const person = {
    name: "Nicolas",
    lastName: "Molina",
  };
  const rta = `${person}  ${limit}`;
  console.info(rta);
};
