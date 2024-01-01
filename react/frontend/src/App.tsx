import React, { useEffect, useState } from 'react';

function App() {
  const [resposta, setResposta] = useState(null);
  const [erro, setErro] = useState(null);

  let url = 'http://localhost:3000/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.status);
        }

        const dados = await response.json();
        setResposta(dados);
      } catch (error) {
        setErro(error.message);
      }
    };

    fetchData();
  }, []); // A lista de dependências vazia garante que o useEffect é executado apenas uma vez, equivalente ao componentDidMount

  return (
    <div>
      {resposta && (
        <div>
          <h2>Dados da API:</h2>
          <pre>{JSON.stringify(resposta, null, 4)}</pre>
        </div>
      )}

      {erro && (
        <div>
          <h2>Erro:</h2>
          <p>{erro}</p>
        </div>
      )}
    </div>
  );
}

export default App;
