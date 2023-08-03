import { useEffect, useState } from 'react';

const Upload = () => {
  const [data, setData] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [dataTratada, setDataTratada] = useState('');
  const [dadosFinais, setDadosFinais] = useState({})

  const handleDataChange = (event) => {
    const { value } = event.target;
    setData(value);
  };

  const handleMensagemChange = (event) => {
    const { value } = event.target;
    setMensagem(value);
  };

  const processData = () => {
    const dadosInput = data
    const linhas = dadosInput.trim().split('\n').slice(1); // Ignorar o cabeçalho (Nome Número)
    
    const objetos = linhas.map((linha) => {
      const [nome, numero] = linha.trim().split(/\s+/);
      return { nome, numero };
    });
    setDataTratada(objetos)
    enviar(objetos); // Passar os dados tratados diretamente para a função enviar()
  };

  function enviar() {
    fetch("/api/dispararMensagens", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosFinais),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  return (
    <div>
      <textarea
        value={data}
        onChange={handleDataChange}
        placeholder="Cole os dados da planilha aqui..."
        rows="5"
        cols="40"
      />
      <textarea
        value={mensagem}
        onChange={handleMensagemChange}
        placeholder="Cole a mensagem aqui..."
        rows="5"
        cols="40"
      />
      <button onClick={processData}>Enviar</button>
    </div>
  );
};

export default Upload;


// youtube.com/watch?v=zVlm_zUfitE