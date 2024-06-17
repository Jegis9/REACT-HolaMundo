//IMPORTAR ARCHIVO TITULO

import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = [];

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
      {/* PRIMERO SE TIENE QUE EVALUAR SI LA LISTA ES DIFERENTE A 0 ENTONCES MUESTRA LA LISTA
      SI SE DEJA SIN LA CONDICIONAL DIFERENTE SE MOSTRARA EL 0 EL CUAL NO DEBE DE APARECER */}
      {list.length !== 0 && "Lista llena"}
      <CardBody title="Hola mundo soy el titulo" text="Soy el contenido" />

      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
