import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IconPointFilled } from '@tabler/icons-react'
import Status from '@/components/Marketing/Status';
export default function chamado() {
    const [chamados, setChamados] = useState([]);
    const chamadoBase = {
        nome: "", 
        email: "", 
        data_entrega: "", 
        titulo: "", 
        descricao: "", 
        status: "esperando"
    }
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

    const [chamado, setChamado] = useState(chamadoBase)
    function enviar() {
        fetch("/api/chamadosMarketing", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(chamado),
        })}



  return (
    <div className='px-5 pt-5 pb-20 bg-slate-200'>
      <div>
        <div className='flex justify-end items-center mx-4'><Image alt='Logo Centro Universo Salvador' className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador2.png" width={310} height={50}/></div>
        <Status/>
        <div className='flex items-center justify-center w-full'>
            <hr className='border w-[95%]'/>
        </div>
        <div className='flex flex-col lg:flex-row w-[100%]'>
            <div className='mt-4 w-full lg:w-[50%]'>
                <h1 className='text-4xl font-medium text-blue-800'>Novo Chamado</h1>
                <div className=''>
                    <div className='flex flex-col lg:flex-row w-full items-center justify-center my-4'>
                        <div className=' flex flex-col justify-around w-full'>
                            <input onChange={(e) => {setChamado({...chamado, nome: e.target.value})}} className='my-2 w-full text-xl p-2 rounded-lg' type='text' placeholder='Nome'/>
                            <input onChange={(e) => {setChamado({...chamado, email: e.target.value})}} className='my-2 w-full text-xl p-2 rounded-md' type='text' placeholder='E-mail'/>
                        </div>
                        <div className='my-2 flex flex-col items-center justify-center w-full m-2'>
                            <label className='mr-4 text-xl my-2'>Data de Entrega</label>
                            <input onChange={(e) => {setChamado({...chamado, data_entrega: e.target.value})}} className='text-2xl p-2 rounded-lg' type='date' placeholder='Limite de entrega'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <input onChange={(e) => {setChamado({...chamado, titulo: e.target.value})}} className='text-xl p-2 rounded-md mb-4' type='text' placeholder='Título'/>
                        <textarea onChange={(e) => {setChamado({...chamado, descricao: e.target.value})}} className='h-[200px] text-lg p-2 rounded-lg' placeholder='Descrição detalhada!'/>
                    </div>
                    <div className='flex justify-end m-4'>
                        <button onClick={() => {enviar(); window.location.reload();}} className='p-2 border border-white rounded-lg text-lg font-medium text-white bg-green-700'>Abrir Chamado</button>
                    </div>
                </div>
            </div>
            <div className=' w-full lg:w-[50%] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-medium text-blue-800 p-4'>Lista de Chamados</h1>
                <div className='bg-white w-[90%] rounded-lg h-[350px] overflow-y-scroll'>
                <table className='w-[100%]'>
                    <thead className='w-[100%]'>
                        <tr className='w-[100%] flex justify-between text-xl font-medium text-blue-600'>
                            <td className='text-center px-5 py-2'>Projeto</td>
                            <td className='text-right px-5 py-2'>Status</td>
                        </tr>
                    </thead>
                    <tbody className='flex w-full flex-col justify-center items-center'>
                        {chamados.map((chamado) => {
                            return(
                            <tr key={chamado.id} className='w-[100%] flex justify-between mx-2 items-center'>
                                <td className='text-center px-5 py-2 text-lg'>{chamado.titulo}</td>
                                <td className='text-right px-5 py-2'><IconPointFilled size={30} className={`${chamado.status == "esperando" ? "text-red-600" : ""} ${chamado.status == "em andamento" ? "text-yellow-600" : ""} ${chamado.status == "concluido" ? "text-green-600" : ""}`}/></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
