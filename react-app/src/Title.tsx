function Title() {
  const name = "CHANCHITO FELIZ";

  if (name) {
    return <h1>HOLA {name}</h1>;
  }
  return <h1>Hola mundo</h1>;
}

export default Title;
