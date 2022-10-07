// funciones

// const saludar = function (nombre) {
//   return `Hola ${nombre}`;
// };

// const saludar2 = (nombre) => {
//   return `Hola ${nombre}`;
// };

// const saludar3 = (nombre) => `Hola ${nombre}`;

// const saludar4 = () => `Hola mundo`;

//console.log(saludar('Juan'));

// console.log(saludar4());

export const getUser = () => {
  return {
    uid: "ABC123",
    username: "luis",
  };
};

// const getUser2 = () => ({
//   uid: "ABd2323",
//   username: "luis",
// });

// console.log(getUser2());

// Tarea
// 1.- Transformar a funcion de flecha
// 2.- Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre){
//    return {
//       uid:'7671231',
//       username: 'Juan Luis'
//    }
// }

export const getUsuarioActivo = (nombre) => ({
  uid: "ABC123",
  username: `${nombre}`,
});

// const usuarioActivo = getUsuarioActivo("Luis Ochoa");
// console.log(usuarioActivo);
