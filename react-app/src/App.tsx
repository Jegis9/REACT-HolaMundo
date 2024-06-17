import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = [];

  const handleSelect = (Element: string) => {
    console.log("Imprimiendo", Element);
  };

  //SE CREA UNA CONSTANTE EN DONDE SE CREA LA CONDICIONAL+
  //SI LA LISTA ES VACIA NO SE MUESTRA NADA, SI ES LLENA, SE MUESTRA EL CONTENIDO
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      {list.length !== 0 && "Lista llena"}
      <CardBody title="Hola mundo soy el titulo" text="Soy el contenido" />
      {contenido}
    </Card>
  );
}

export default App;
