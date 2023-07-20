import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IconPointFilled, IconPencil, IconTrash, IconEye } from '@tabler/icons-react'
export default function admin() {
    const [chamados, setChamados] = useState([])
    useEffect(() => {
      fetch(`/api/chamadosMarketing`)
        .then((response) => {response.json();})
        .then((data) => {
          setChamados(data)
          console.log(data)
        })  
      }, [])
  return (
    <div className='px-5 pt-5 pb-20 bg-slate-300 min-h-[800px]'>
            <div className='flex justify-end items-center mx-4'><Image alt='Logo Centro Universo Salvador' className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador2.png" width={310} height={50}/></div>
            <div className='flex flex-row my-4 text-white'>
                <div className='w-[280px] text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-green-600'>
                    <h2 className='font-bold'>Concluídos</h2>
                    <p>0</p>
                </div>
                <div className='w-[280px] text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-yellow-600'>
                    <h2 className='font-bold'>Em andamento</h2>
                    <p>0</p>
                </div>
                <div className='w-[280px] text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-red-600'>
                    <h2 className='font-bold'>Esperando</h2>
                    <p>0</p>
                </div>
            </div>
        <div className='w-full flex justify-center items-start bg-white rounded-lg h-[450px] overflow-y-scroll'>
            <table className='w-full'>
                <thead className='mb-8'>
                    <tr className='text-2xl font-medium text-blue-700'>
                        <td className='text-center'>ID</td>
                        <td className='text-center'>Título</td>
                        <td className='text-center'>Abertura</td>
                        <td className='text-center'>Entrega</td>
                        <td className='text-center'>Status</td>
                        <td className='text-center'>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {chamados.map((chamado) => {
                        return(
                    <tr className='text-xl' key={chamado.id}>
                        <td className='text-center'>{chamado.id}</td>
                        <td className='text-center'>{chamado.titulo}r</td>
                        <td className='text-center'>{chamado.data_abertura}</td>
                        <td className='text-center'>{chamado.data_entrega}</td>
                        <td className='mt-2 flex justify-center items-center'><IconPointFilled size={30} className={`text-yellow-600`}/></td>
                        <td className='text-center text-white'>
                            <button className='border border-white p-2 rounded-md mx-1 bg-blue-700'><IconEye size={25}/></button>
                            <button className='border border-white p-2 rounded-md mx-1 bg-green-700'><IconPencil size={25}/></button>
                            <button className='border border-white p-2 rounded-md mx-1 bg-red-700'><IconTrash size={25}/></button>
                        </td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
