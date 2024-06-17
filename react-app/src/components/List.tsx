import { useState } from "react";

type Props = {
  data: string[];
};

export default function List({ data }: Props) {
  //MANEJO DE ESTADO, QUE SIRVE PARA PODER DEFINIR EL VALOR INICIAL, NO DEBE DE CAMBIAR
  const [index, setIndex] = useState(1);

  //CUANDO SE HACE CLIC TOMA EL VALOR INDEX DEL ELEMENTO SELECCIONADO
  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i)}
          key={element}
          //SI EL INDEX CAMBIA AL SELECCIONADO COLOCA EL INDEX EN ACTIVO DE LO CONTRARIO NO
          //RENDERIZA NINGUNA COSA
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}
