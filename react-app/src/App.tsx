//IMPORTAR ARCHIVO TITULO

import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Eren", "Kasaki"];

  //SE CREA LA FUNCION HANDLESELECT PARA IMPRIMIR FUNCION
  const handleSelect = (Element: string) => {
    console.log("Imprimiendo", Element);
  };
  //CADA UNA ES INDEPENDIENTE DE CADA FUNCION QUE SE LLAMA
  //SE CREA LA FUNCION HANDLESELECT PARA IMPRIMIR FUNCION
  const handleSelect2 = (Element: string) => {
    console.log("Mostrando", Element);
  };
  return (
    <Card>
      <CardBody title="Hola mundo soy el titulo" text="Soy el contenido" />

      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
