/**
 * Tipos de unión:
 *
 * Permiten especificar que una variable o parámetro de
 * función puede tener más de un tipo posible. Esto
 * significa que una variable puede contener valores de
 * diferentes tipos en diferentes momentos
 */
(() => {
  let price: string | number = '1500';
  price = 2500;
  console.log('price:', price);

  let userId: string | number = 1;
  userId = '0301010289';
  console.log('userId:', userId);

  function getUser(name: string, userId: string | number) {
    // Validar el tipo de dato de una variable
    if (typeof userId === 'string') {
      name = name.toUpperCase();
      userId = userId.toUpperCase();
    } else {
      name = name.toLowerCase();
    }
    return ` Usuario: ${name}
      Id: ${userId}`;
  }
  console.log(getUser('Pedro Perez', 200));
  console.log(getUser('Margarita', 'xxyyzz0011'));
})();
