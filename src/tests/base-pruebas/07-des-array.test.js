import { retornaArreglo } from "../../base-pruebas/07-des-array"

describe('Pruebas en 07-deses-arr', () => {
  
  test('debe de retornar un string y un número', () => {
    
     const [letras, numeros] = retornaArreglo();

     expect( letras).toBe('ABC');
     expect(numeros).toBe(123);

     expect(typeof letras).toBe('string')
     expect(typeof numeros).toBe('number')

     expect( letras).toEqual( expect.any(String));

  })
  


})
