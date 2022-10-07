import getHeroeById from "../../base-pruebas/08-import-export";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });


  test("getHeroeById debe retornar undefined si no existe", () => {
    const id = 1000;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

});
