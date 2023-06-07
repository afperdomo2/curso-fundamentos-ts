(() => {
  /**
   * 1. Alias de tipo
   *
   * crea un alias de tipo llamado UserId que representa una
   * unión de dos tipos: string y number. Esto significa que
   * una variable declarada como UserId puede contener valores
   * de tipo string o number.
   */
  type UserId = string | number;

  let userId: UserId = 10;
  console.log('userId:', userId);

  function getUserId(userId: UserId) {
    if (typeof userId === 'string') {
      console.log('string:', userId.toUpperCase());
    } else {
      console.log('number:', userId.toFixed(2));
    }
  }
  getUserId('xyz11');
  getUserId(123);

  /**
   * 2. Literal types
   *
   * Declaración let shirtSize: 'S' | 'M' | 'L' | 'XL' | 40;
   * define una variable llamada shirtSize que solo puede contener
   * uno de los siguientes valores: 'S', 'M', 'L', 'XL' o 40.
   */
  let shirtSize: 'S' | 'M' | 'L' | 'XL' | 40;
  shirtSize = 'S';
  shirtSize = 'L';
  console.log('Shirt Talle:', shirtSize);
  shirtSize = 40;
  console.log('Shirt Talle:', shirtSize);

  type Sizes = 'S' | 'M' | 'L' | 'XL' | 40;
  let pantsSize: Sizes = 'M';
  console.log('Pants Talle:', pantsSize);
})();
