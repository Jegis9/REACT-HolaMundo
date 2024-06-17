type Props = {
  data: string[];
};

export default function List({ data }: Props) {
  // SE CREA UNA FUNCION PARA PODER ENVIAR EL PARAMETRO
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    <ul className="list-group">
      {data.map((element) => (
        <li
          //   SE LLAMA A LA FUNCION Y SE LE ENVIA COMO PARAMETRO EL ELEMENTO DE LA LISTA
          //   PARA MOSTRAR CUANDO SE DE CLIC
          onClick={() => handleClick(element)}
          key={element}
          className="list-group-item"
        >
          {element}
        </li>
      ))}
    </ul>
  );
}
