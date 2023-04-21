import { useEffect, useState } from "react";

export default function Inicio() {
  const host = "http://localhost:3002/";

  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    fetch(host)
      .then((resp) => resp.json())
      .then((list) => setImoveis(list));
  }, []);

  return (
    <div>
      {imoveis.map((imovel) => {
        return <div key={imovel._id}>{imovel.titulo}</div>;
      })}
      <h2>Inicio</h2>
    </div>
  );
}
