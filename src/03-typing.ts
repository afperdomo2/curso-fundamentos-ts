// Tipado de datos

// Función anónima autoejecutable para evitar problemas de scope
(() => {
  // 1. Variables inferidas
  // El motor de inferencia asigna automaticamente el tipo
  let myProductName = 'Bombillo'; // Tipo: string
  let myProductPrice = 900; // Tipo: number

  // Podemos usar las funciones de sus respectivos tipos
  myProductName.toLowerCase();
  myProductPrice.toFixed();

  console.info(myProductName);
  console.info(myProductPrice);

  // 2. Constantes
  // En TS no es necesario tipar las constantes, ya que estas son
  // inmutables y por consiguiente no necesitan validar su tipo
  const myProductStore = 20;
  const myProductName2 = 'Bombilla';

  // 3. Tipado explícito
  let name: string = 'Pedito Pérez';
  let age: number = 18;
})();
