import React, { useState } from "react";
import "../styles/BuildPc.css"

export const BuildPc = () => {
  const [data, setData] = useState(null);

    //averiguar si puedo hacerlo con estado local de lo contrario hacerlo con redux y el estado global

    //usar la ruta de buildpc que esta en el back para traer la mother con el socket compatible

    //mapear todas las mothers despues de elegir el proce

    //empezar a planear una ruta nueva que sea para las rams y su ddr para poder mapearlas

    //tambien las rutas de los m.2 para verificar si la mother tiene esa entrada y si lo puede poner
 

  return (
    <div className="DivBuild">
      <button onClick={alert("xd")}>Obtener datos</button>
      {data && <div>{data}</div>}
    </div>
  );
};
