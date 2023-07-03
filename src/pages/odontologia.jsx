import React from 'react'
import BaseParaCurso from "@/components/BaseParaCursos"
export default function direito() {
  return (
    <BaseParaCurso
        nomeDoCurso="Odontologia"
        modalidade="Presencial"
        duracao="8 Semestres / 4 Anos"
        sobre="O curso de Odontologia tem como fundamentação as atuais necessidades sociais, os avanços humanísticos, científicos e tecnológicos. Preconiza recentes recomendações dos órgãos nacionais e internacionais de saúde dos núcleos e associações de ensino odontológico e atua segundo estas. O curso tem uma estruturação curricular e um projeto didático-pedagógico desenvolvido em dois núcleos: o Núcleo Profissional de Saúde com Formação Humanística e o Núcleo Odontológico."
        matrizCurricular="http://gradecurricular.universo.edu.br/19_309AN.pdf"
        urlImagem="/img/curso/odontologia.png"
        turno="Diurno / Noturno"
    />
  )
}


import React, { useState } from 'react'
import Image from 'next/image';
import MenuNavegacao from '@/components/Menu/MenuNavegacao';
import Link from 'next/link';
import { IconFileText } from '@tabler/icons-react';
export default function odontologia() {

  return (
    <MenuNavegacao>
    <div className={`
    bg-gradient-to-r from-blue-200 to-red-300
    h-full w-full flex flex-col items-center
    `}>
    <div className={`flex flex-col gap-4 md:w-[60%] w-[95%] justify-center items-center`}>
        <div className={`w-[100%] border pb-4 rounded-xl bg-white flex-col justify-center items-center shadow-xl mt-8`}>
          
            <Image src="/img/curso/odontologia.png" width={500} height={500} className="rounded-t-xl shadow-md flex justify-center items-center"/>
          
            {/* Refatorar itens (criar componentes) */}
            <h1 className="text-2xl font-bold my-3 text-center">Odontologia</h1>
            <div className="flex flex-col mx-4">
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Modalidade:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Presencial</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Duração:</h2>
                 
                    <p className="border-blue-400 text-blue-400 font-semibold ml-4 border px-2 py-1 rounded-full">8 Semestres / 4 Anos</p>
          
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Turno:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Noturno</p>
                </div>
                <div className='flex justify-center items-center'>
                    <Link href="/" className='
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
                    <p className="text-justify font-medium">O curso de Odontologia tem como fundamentação as atuais necessidades sociais, os avanços humanísticos, científicos e tecnológicos. Preconiza recentes recomendações dos órgãos nacionais e internacionais de saúde dos núcleos e associações de ensino odontológico e atua segundo estas. O curso tem uma estruturação curricular e um projeto didático-pedagógico desenvolvido em dois núcleos: o Núcleo Profissional de Saúde com Formação Humanística e o Núcleo Odontológico.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</MenuNavegacao>
  )
}
/*nomeDoCuros Odontologia
modalidade
duracao 8 Semestres / 4 Anos
sobre 
matrizCurricular */