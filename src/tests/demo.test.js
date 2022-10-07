describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe de fallar", () => {
    // 1. Inicialización
    const mensaje1 = "Hola mundo";

    // 2. Estimulo
    const mensaje2 = mensaje1.trim();

    // 3. Observar el comportamiento
    expect(mensaje1).toBe(mensaje2);
  });
});
