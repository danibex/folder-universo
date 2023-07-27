import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconPointFilled, IconPencil, IconTrash, IconEye } from '@tabler/icons-react';
import Status from '@/components/Marketing/Status';
import { IconX } from '@tabler/icons-react';
import { ColorRing } from 'react-loader-spinner';

export default function admin() {
  const [chamados, setChamados] = useState([]);
  const [popUp, setPopUp] = useState(false)
  const [chamado, setChamado] = useState({})

  useEffect(() => {
    fetch(`/api/chamadosMarketing`)
      .then((response) => response.json())
      .then((data) => {
        setChamados(data);
        console.log(data); // Verifique os dados reais retornados pela API
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function deletarChamado(id) {
    fetch(`/api/chamadosMarketing?id=${id}`, {method: "DELETE"})
      .then((response) => response.json)
  }

  function atualizarChamado(id) {
    fetch(`/api/atualizacaoChamado?id=${id}`, {
      method: "PUT", 
      body: JSON.stringify(chamado), 
      headers: {
      'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json)
  }

  function atualizarPopUp(chamado) {
    setChamado(chamado)
    console.log(chamado)
  }
  return (
    <div className='px-5 pt-5 pb-20 bg-slate-300 min-h-[800px]'>
            <div className='flex justify-end items-center mx-4'><Image alt='Logo Centro Universo Salvador' className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador2.png" width={310} height={50}/></div>
            <Status/>
        <div className='w-full flex justify-center items-start bg-white rounded-lg h-[450px] overflow-y-scroll'>
            <table className='w-full'>
                <thead className='mb-8'>
                    <tr className='text-2xl font-medium text-blue-700'>
                        <td className='text-center'>ID</td>
                        <td className='text-center'>Projeto</td>
                        <td className='text-center'>Abertura</td>
                        <td className='text-center'>Prazo</td>
                        <td className='text-center'>Status</td>
                        <td className='text-center'>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {chamados && chamados.map((chamado) => {
                        return(
                    <tr className='text-xl' key={chamado.id}>
                        <td className='text-center'>{chamado.id}</td>
                        <td className='text-center'>{chamado.titulo}</td>
                        <td className='text-center'>{chamado.data_abertura.slice(0,10)}</td>
                        <td className='text-center'>{chamado.data_entrega}</td>
                        <td className='mt-2 flex justify-center items-center'><IconPointFilled size={30} className={`${chamado.status == "esperando" ? "text-red-600" : ""} ${chamado.status == "em andamento" ? "text-yellow-600" : ""} ${chamado.status == "concluido" ? "text-green-600" : ""}`}/></td>
                        <td className='text-center text-white'>
                            <button onClick={() => {setPopUp(!popUp); atualizarPopUp(chamado)}} className='border border-white p-2 rounded-md mx-1 bg-blue-700'><IconEye size={25}/></button>
                            {/* <button className='border border-white p-2 rounded-md mx-1 bg-green-700'><IconPencil size={25}/></button> */}
                            <button onClick={() => {deletarChamado(chamado.id); window.location.reload();} } className='border border-white p-2 rounded-md mx-1 bg-red-700'><IconTrash size={25}/></button>
                        </td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div className={`${popUp ? "flex" : "hidden"} text-lg ease-in flex flex-col justify-center items-center z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200 p-6 shadow-md rounded-xl text-center`}>
          <button onClick={() => setPopUp(false)} className='absolute top-2 right-2'><IconX /></button>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='mx-2'>
                <p>Nome:</p>
                <input onChange={(e) => {setChamado({...chamado, nome: e.target.value})}} className='p-2' type='text' value={chamado.nome}/>
              </div>
              <div className='mx-2'> 
                <p>E-mail:</p>
                <input onChange={(e) => {setChamado({...chamado, email: e.target.value})}} className='p-2' type='text' value={chamado.email}/>
              </div>
            </div>
            <div className='flex flex-row justify-between m-2 '>
              <div className='flex flex-col'>
                <div className='flex flex-row text-green-600'>
                  <p className='mr-2'>Data de Abertura:</p>
                  <p>{chamado.data_entrega}</p>
                </div>
                <div className='flex flex-row text-red-600'>
                  <p className='mr-2'>Data de entrega:</p>
                  <p>{chamado.data_entrega}</p>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <p className='text-black mr-2'>Status:</p>
                <select onChange={(e) => {setChamado({...chamado, status: e.target.value});}} className='p-2'>
                  <option className='text-black'>Alterar</option>
                  <option className='text-red-600' value="esperando">Esperando</option>
                  <option className='text-yellow-600' value="em andamento">Em Andamento</option>
                  <option className='text-green-600' value="concluido">Concluído</option>
                </select>
              </div>
            </div>
            <div className='w-full flex flex-col justify-start my-2'>
              <p>Título:</p>
              <input onChange={(e) => {setChamado({...chamado, titulo: e.target.value})}} className='p-2' type='text' value={chamado.titulo}/>
            </div>
            <div className='w-full flex flex-col justify-start my-2'>
              <p>Descrição:</p>
              <textarea onChange={(e) => {setChamado({...chamado, descricao: e.target.value})}} className='h-[200px]' type='textarea' value={chamado.descricao}/>
            </div>
            <div className='flex flex-row justify-end items-end my-3 font-medium'>
              <button onClick={() => setPopUp(false)} className='px-4 py-2 border border-black mx-1 rounded-lg bg-orange-600 text-white'>Cancelar</button>
              <button onClick={() => {atualizarChamado(chamado.id); {window.location.reload();}}} className='px-4 py-2 border border-black mx-1 rounded-lg bg-green-700 text-white'>Salvar</button>
            </div>
          </div>
        </div>
    </div>
  )
}