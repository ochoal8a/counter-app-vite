import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objecto ", () => {
    const testUser = {
      uid: "ABC123",
      username: "luis",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objecto", () => {

    const name = 'luis';
    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC123",
      username: "luis"
    });

  });


});
