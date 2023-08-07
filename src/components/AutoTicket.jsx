import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Upload = () => {
  const [data, setData] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleDataChange = (event) => {
    const { value } = event.target;
    setData(value);
  };

  const handleMensagemChange = (event) => {
    const { value } = event.target;
    setMensagem(value);
  };

  const processData = () => {
    const dadosInput = data;
    const linhas = dadosInput.trim().split('\n').slice(1); // Ignorar o cabeçalho (Nome Número)

    const objetos = linhas.map((linha) => {
      const [nome, numero] = linha.trim().split(/\s+/);
      return { nome, numero };
    });

    // Convert the array of objects to a stringified JSON before sending it to the backend
    const dataTratadaJson = JSON.stringify(objetos);

    fetch("/api/dispararMensagens", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataTratada: dataTratadaJson, mensagem }), // Send dataTratada and mensagem in the request body
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <div className='w-full h-[800px] flex justify-center items-center bg-[#112D6F]'>
      <div className='flex flex-col items-center justify-center w-[70%] py-10 bg-white rounded-xl'>
      <div className='flex justify-end items-center mx-4'><Image alt='Logo Centro Universo Salvador' className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador2.png" width={310} height={50}/></div>
        <div className='flex flex-col items-center justify-center py-4'>
          <h2 className='text-2xl py-2'>Mensagem</h2>
          <textarea
            className='bg-slate-200 p-2 rounded-xl'
            value={mensagem}
            onChange={handleMensagemChange}
            placeholder="Cole a mensagem aqui..."
            rows="5"
            cols="40"
          />
        </div>
        <div className='flex flex-col items-center justify-center py-4'>
            <h2 className='text-2xl py-2'>Planilha</h2>
            <textarea
              className='bg-slate-200 p-2 rounded-xl'
              value={data}
              onChange={handleDataChange}
              placeholder="Cole os dados da planilha aqui..."
              rows="5"
              cols="40"
            />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={processData}>Enviar</button>
      </div>
    </div>
  );
};

export default Upload;