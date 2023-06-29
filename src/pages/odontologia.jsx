import React, { useState } from 'react'
import Image from 'next/image';
import MenuNavegacao from '@/components/Menu/MenuNavegacao';
export default function odontologia() {
    const [activeSection, setActiveSection] = useState("sobre");
    function mostrarDescricao(elemento) {
      setActiveSection(elemento);
    } 

  return (
    <MenuNavegacao>
    <div className={`
    bg-gradient-to-r from-blue-200 to-red-300
    h-full w-full flex flex-col items-center
    `}>
    <div className={`flex flex-col gap-4 md:w-[60%] w-[95%] justify-center items-center`}>
        <div className={`w-[100%] border pb-4 rounded-xl bg-white flex-col justify-center items-center shadow-xl mt-8`}>
            <div className="relative">
            <Image src="/img/curso/odontologia.png" width={500} height={500} className="rounded-t-xl shadow-md"/>
            </div>
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
                    <h2 className="font-semibold text-lg">Nível:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Graduação</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Turno:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Noturno</p>
                </div>
            </div>
        </div>
        <div className="border flex flex-col w-[100%] bg-white rounded-xl mb-8">
            <div className={`w-[100%] p-4 flex flex-col md:flex-row justify-around items-center bg-green-400 rounded-t-xl`}>
                <button onClick={() => mostrarDescricao("sobre")} className={`w-[80%] md:w-auto font-medium active:shadow-none hover:text-white hover:bg-blue-500 text-blue-500 bg-white my-2 py-2 px-4 rounded-full shadow-xl text-base`}>Sobre</button>
                <button onClick={() => mostrarDescricao("localizacao")} className={`w-[80%] md:w-auto font-medium active:shadow-none hover:text-white hover:bg-blue-500 text-blue-500 bg-white my-2 py-2 px-4 rounded-full shadow-xl text-base`}>Localização</button>
                <button onClick={() => mostrarDescricao("conheca")} className={`w-[80%] md:w-auto font-medium active:shadow-none hover:text-white hover:bg-blue-500 text-blue-500 bg-white my-2 py-2 px-4 rounded-full shadow-xl text-base`}>Conheça a Universo</button>
            </div>
            <div className={``}>
                <div className={`${activeSection == "sobre" ? "flex" : "hidden"} p-2 flex justify-center items-center`}>
                    <p className="text-justify font-medium">O curso de Odontologia tem como fundamentação as atuais necessidades sociais, os avanços humanísticos, científicos e tecnológicos. Preconiza recentes recomendações dos órgãos nacionais e internacionais de saúde dos núcleos e associações de ensino odontológico e atua segundo estas. O curso tem uma estruturação curricular e um projeto didático-pedagógico desenvolvido em dois núcleos: o Núcleo Profissional de Saúde com Formação Humanística e o Núcleo Odontológico.</p>
                </div>
                <div className={`${activeSection == "localizacao" ? "flex" : "hidden"} flex justify-center items-center`}>
                    <iframe className="rounded-b-xl w-[100%] h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.5806958963828!2d-38.4740161078204!3d-12.990391910875326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b47bf14dcdd%3A0x2750cc44b55f2a9c!2sUniverso%20Universidade%20Salgado%20de%20Oliveira%2C%20Universo%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1686353731361!5m2!1spt-BR!2sbr" width="auto" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={`${activeSection == "conheca" ? "flex" : "hidden"} flex justify-center items-center`}>
                    <iframe className="rounded-b-xl w-[100%] h-[300px]" src="https://www.google.com/maps/embed?pb=!4v1686354031560!6m8!1m7!1s7ZC-5Mfy0cLkjkneH-cb_w!2m2!1d-12.99091461682069!2d-38.47377564015279!3f96.01900287863124!4f9.077255736359064!5f0.7820865974627469" width="auto" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
</MenuNavegacao>
  )
}
