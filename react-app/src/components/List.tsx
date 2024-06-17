import { useState } from "react";

type Props = {
  data: string[];
  //SE CREA UN UNA FUNCION PARA QUE RECIBA EL ELEMENTO Y NO DEVUELVA NADA
  //ESTO PUEDE SER OPCIONAL
  onSelect?: (element: string) => void;
};

export default function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);

  //SE AGREGA EL ELEMENTO AL DESTRICTURING ELEMENTO
  const handleClick = (i: number, element: string) => {
    setIndex(i);
    //SE LE PASA A LA FUNCION EL ELEMENTO COMO PARAMETRO
    onSelect?.(element);
  };

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          //SE AGREGFA EL ELEMENTO QUE SE PASA COMO PARAMETRO
          onClick={() => handleClick(i, element)}
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
