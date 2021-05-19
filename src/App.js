import React from "react";

function App() {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "Gustavo", idade: "25" });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui faculdade" });
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      {ativo ? <p>{dados.faculdade}</p> : ""}
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    </>
  );
}

export default App;
