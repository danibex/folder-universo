import React from 'react'

export default function Status() {
  return (
<div className='flex flex-col lg:flex-row my-4 text-white'>
            <div className=' text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-green-600'>
                <h2 className='font-bold'>Concluídos</h2>
                <p>0</p>
            </div>
            <div className=' text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-yellow-600'>
                <h2 className='font-bold'>Em andamento</h2>
                <p>0</p>
            </div>
            <div className=' text-center whitespace-nowrap flex flex-col border border-white rounded-md justify-center items-center p-2 m-2 text-4xl bg-red-600'>
                <h2 className='font-bold'>Esperando</h2>
                <p>0</p>
            </div>
        </div>
  )
}
