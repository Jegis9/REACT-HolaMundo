//IMPORTAR ARCHIVO TITULO

import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  //SE DEFINE LA LISTA DE ELEMENTOS
  const list = ["Goku", "Eren", "Kasaki"];
  //EN List en su propiedad data se llama a la lista de elementos list
  return (
    <Card>
      <CardBody title="Hola mundo soy el titulo" text="Soy el contenido" />
      <List data={list} />
    </Card>
  );
}

export default App;
