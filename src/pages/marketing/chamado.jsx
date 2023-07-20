import React from 'react'
import Image from 'next/image'
import { IconPointFilled } from '@tabler/icons-react'
export default function chamado() {
  return (
    <div className='px-5 pt-5 pb-20 bg-slate-200'>
      <div>
        <div className='flex justify-end items-center mx-4'><Image alt='Logo Centro Universo Salvador' className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador2.png" width={310} height={50}/></div>
        <div className='flex flex-row my-4 text-white'>
            <div className='w-[28   0px] text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-green-600'>
                <h2 className='font-bold'>Concluídos</h2>
                <p>0</p>
            </div>
            <div className='w-[28   0px] text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-yellow-600'>
                <h2 className='font-bold'>Em andamento</h2>
                <p>0</p>
            </div>
            <div className='w-[280px] text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-red-600'>
                <h2 className='font-bold'>Esperando</h2>
                <p>0</p>
            </div>
        </div>
        <div className='flex items-center justify-center w-full'>
            <hr className='border w-[95%]'/>
        </div>
        <div className='flex flex-row w-[100%]'>
            <div className='mt-4 w-[50%]'>
                <h1 className='text-4xl font-medium text-blue-800'>Novo Chamado</h1>
                <div className=''>
                    <div className='flex flex-row items-center justify-around my-4'>
                        <input className='text-xl p-2 rounded-md' type='text' placeholder='Seu Nome'/>
                        <input className='text-xl p-2 rounded-md' type='text' placeholder='E-mail'/>
                        <div className='flex flex-row items-center justify-center'>
                            <label className='mr-4 text-lg'>Entrega</label>
                            <input className='text-2xl p-2 rounded-lg' type='date' placeholder='Limite de entrega'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <input className='text-xl p-2 rounded-md mb-4' type='text' placeholder='Título'/>
                        <textarea className='h-[200px] text-lg p-2 rounded-lg' placeholder='Descrição detalhada!'/>
                    </div>
                </div>
            </div>
            <div className='w-[50%] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-medium text-blue-800 p-4'>Lista de Chamados</h1>
                <div className='bg-white w-[90%] rounded-lg h-[350px] overflow-y-scroll'>
                <table className='w-[100%]'>
                    <thead className='w-[100%]'>
                        <tr className='w-[100%] flex justify-between text-xl font-medium text-blue-600'>
                            <td className='text-center px-5 py-2'>Título</td>
                            <td className='text-right px-5 py-2'>Status</td>
                        </tr>
                    </thead>
                    <tbody className='flex w-full flex-col justify-center items-center'>
                        <tr className='w-[100%] flex justify-between mx-2 items-center'>
                            <td className='text-center px-5 py-2 text-lg'>Folder Universo</td>
                            <td className='text-right px-5 py-2'><IconPointFilled size={30} className={`text-red-600`}/></td>
                        </tr>
                        <tr className='w-[100%] flex justify-between mx-2 items-center'>
                            <td className='text-center px-5 py-2 text-lg'>Folder Universo</td>
                            <td className='text-right px-5 py-2'><IconPointFilled size={30} className={`text-yellow-600`}/></td>
                        </tr>
                        <tr className='w-[100%] flex justify-between mx-2 items-center'>
                            <td className='text-center px-5 py-2 text-lg'>Folder Universo</td>
                            <td className='text-right px-5 py-2'><IconPointFilled size={30} className={`text-green-600`}/></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
