import { useEffect, useState } from 'react';

const Upload = () => {
  const [data, setData] = useState('');

  const handleDataChange = (event) => {
    const { value } = event.target;
    setData(value);
  };

  const processData = () => {
    const dadosInput = data
    const linhas = dadosInput.trim().split('\n').slice(1); // Ignorar o cabeçalho (Nome Número)
    
    const objetos = linhas.map((linha) => {
      const [nome, numero] = linha.trim().split(/\s+/);
      return { nome, numero };
    });
    setData(objetos)
    console.log(objetos);
  };

  
  return (
    <div>
      <textarea
        value={data}
        onChange={handleDataChange}
        placeholder="Cole os dados da planilha aqui..."
        rows="10"
        cols="50"
      />
      <button onClick={processData}>Processar Dados</button>
    </div>
  );
};

export default Upload;


// youtube.com/watch?v=zVlm_zUfitE