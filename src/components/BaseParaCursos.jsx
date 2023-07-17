import React, { useState } from 'react'
import Image from 'next/image';
import MenuNavegacao from '@/components/Menu/MenuNavegacao';
import Link from 'next/link';
import { IconFileText } from '@tabler/icons-react';
export default function Base(props) {

  return (
    <MenuNavegacao>
    <div className={`
    bg-gradient-to-r from-blue-200 to-red-300
    h-full w-full flex flex-col items-center
    `}>
    <div className={`flex flex-col gap-4 md:w-[60%] w-[95%] justify-center items-center`}>
        <div className={`w-[100%] border pb-4 rounded-xl bg-white flex-col justify-center items-center shadow-xl mt-8`}>
            <div className="relative">
            <Image alt='Imagem do curso' src={props.urlImagem} width={500} height={500} className="rounded-t-xl shadow-md"/>
            </div>
            {/* Refatorar itens (criar componentes) */}
            <h1 className="text-2xl font-bold my-3 text-center">{props.nomeDoCurso}</h1>
            <div className="flex flex-col mx-4">
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Modalidade:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">{props.modalidade}</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Duração:</h2>
                 
                    <p className="border-blue-400 text-blue-400 font-semibold ml-4 border px-2 py-1 rounded-full">{props.duracao}</p>
          
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Turno:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">{props.turno}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <Link href={props.matrizCurricular} className='
                    text-xl my-2 bg-blue-600 w-[200px] h-[50px] flex items-center justify-center
                    text-white font-semibold rounded-xl
                    '>
                    <IconFileText className='mr-2'/>
                    Matriz curricular</Link>
                </div>
            </div>
        </div>
        <div className="border flex flex-col w-[100%] bg-white rounded-xl mb-8">
            <div className={`w-[100%] p-4 flex flex-col md:flex-row justify-around items-center bg-green-400 rounded-t-xl`}>
                <button className={`w-[80%] md:w-auto font-medium active:shadow-none text-white bg-blue-500  my-2 py-2 px-4 rounded-full shadow-xl text-base`}>Sobre</button>
            </div>
            <div className={``}>
                <div className={`p-2 flex justify-center items-center`}>
                    <p className="text-justify font-medium">{props.sobre}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</MenuNavegacao>
  )
}
