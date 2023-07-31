import React, { useEffect, useState } from 'react';

export default function Status(props) {
  const [chamados, setChamados] = useState([]);
  const [concluidoCount, setConcluidoCount] = useState(0);
  const [emAndamentoCount, setEmAndamentoCount] = useState(0);
  const [esperandoCount, setEsperandoCount] = useState(0);

  useEffect(() => {
    fetch(`/api/chamadosMarketing`)
      .then((response) => response.json())
      .then((data) => {
        setChamados(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Realiza a contagem dos valores após o estado 'chamados' ser atualizado
    const countValues = () => {
      let concluidoCount = 0;
      let emAndamentoCount = 0;
      let esperandoCount = 0;

      chamados.forEach(item => {
        switch (item.status) {
          case 'concluido':
            concluidoCount++;
            break;
          case 'em andamento':
            emAndamentoCount++;
            break;
          case 'esperando':
            esperandoCount++;
            break;
          default:
            break;
        }
      });

      // Atualiza os estados com as contagens
      setConcluidoCount(concluidoCount);
      setEmAndamentoCount(emAndamentoCount);
      setEsperandoCount(esperandoCount);
    };

    countValues();
  }, [chamados]);

  return (
    <div className='flex flex-col lg:flex-row my-4 text-white'>
      <div className=' text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-green-600'>
        <h2 className='font-bold'>Concluídos</h2>
        <p>{concluidoCount}</p>
      </div>
      <div className=' text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-yellow-600'>
        <h2 className='font-bold'>Em andamento</h2>
        <p>{emAndamentoCount}</p>
      </div>
      <div className=' text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-red-600'>
        <h2 className='font-bold'>Esperando</h2>
        <p>{esperandoCount}</p>
      </div>
    </div>
  );
}
