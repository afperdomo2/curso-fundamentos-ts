// Any es la via de escape de TypeScript. Puedes usar any
// para declarar que una sección de tu código es dinámica y
// parecida a JavaScript, o como solución alternativa para
// las limitaciones del sistema de tipado.
(() => {
  let dinamicVar: any = 100;
  dinamicVar = false;
  dinamicVar = 'HOLA MUNDO';

  console.log('dinamicVar:', dinamicVar);

  // Realiza conversión de tipo explícita, a partir de otra variable
  const rta = (dinamicVar as string).toLowerCase();
  console.log('rta:', rta); // Tipo: string

  dinamicVar = 100;
  // Cast: any => number
  const rta2 = (dinamicVar as number) / 2;
  console.log('rta2:', rta2);

  dinamicVar = 300;
  // Cast: any => number
  const rta3 = <number>dinamicVar / 2;
  console.log('rta3:', rta3);
})();
