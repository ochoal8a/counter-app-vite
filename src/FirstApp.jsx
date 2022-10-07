import React, { Fragment } from "react";
import PropTypes from "prop-types";

// export const FirstApp = () => {
//   return (
//     <>
//       <h1>Luis Ochoa</h1>
//       <p>Hola papu</p>
//     </>
//   );
// };

// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h1>Luis Ochoa</h1>
//       <p>Hola papu</p>
//     </Fragment>
//   );
// };

// const newMessage = {
//   message: "Hola mundo",
//   title: "Fernando",
//   edad: 37,
//   city: "México",
// };

// Regla si no hay ninguna dependencia del componente, tiene que estar fuera del functional component
const getName = (name) => {
  return <h1>{name}</h1>;
};

export const FirstApp = ({ title, subtitle = "La tierra explota", name }) => {
  //if()

  return (
    <>
      {<p>{title}</p>}
      {<p>{subtitle}</p>}
      <h2>{name}</h2>
      {/* {getName("Paparapa, mayinbuuuuuu")} */}
      {/* <h1>Hola mundo</h1> */}
      {/* <h1>{JSON.stringify(newMessage)}</h1> */}
      {/* <p>Hola papu soy un babidi</p> */}
    </>
  );
};

FirstApp.proTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: "Luis Ochoa",
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
};
