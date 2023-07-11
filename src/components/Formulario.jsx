import React, { useState } from 'react'
import { IconRocket } from '@tabler/icons-react'
import { Puff } from 'react-loader-spinner'
import Image from 'next/image'
import { IconX } from '@tabler/icons-react'
export default function Formulario() {
    const [modalidade, setModalidade] = useState("Presencial")
    const [carregando, setCarregando] = useState(false)
    const leadBase = {
        nome: "",
        email: "",
        telefone: "",
        modalidade: modalidade,
        nome_curso: "",
        empresa: ""
    }
    const [popUp, setPopUp] = useState(false)
    const [lead, setLead] = useState(leadBase)
    function enviar() {
        setCarregando(true);
        fetch("/api/leads", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(lead),
        })
          .then(() => {
            setTimeout(() => {
              setCarregando(false);
              setPopUp(true)
            }, 2000);
          });
      }
  return (
<div className="shadow-xl mb-5 flex flex-col justify-center items-center rounded-xl w-[90%] md:w-[80%] bg-slate-200">
    <h1 className={`
    bg-[#FFBB00]
    rounded-t-xl p-2 mt-0 w-[100%] flex justify-center items-center text-center
    text-4xl text-white font-semibold
    `} style={{fontFamily:"'Roboto Condensed', sans-serif"}}>Preencha Aqui<br/>e Garanta sua Bolsa <br/> Agora Mesmo!</h1> 
    <form className={`flex flex-col justify-center my-3 w-[90%]`}> 
        <input type="text" placeholder="Nome Completo"
        className={`p-2 m-2 rounded-2xl`}
        onChange={(e) => {setLead({...lead, nome: e.target.value})}}
        />
        <input type="text" placeholder="E-mail"
        className={`p-2 m-2 rounded-2xl`}
        onChange={(e) => {setLead({...lead, email: e.target.value})}}
        />
        <input type="text" placeholder="Telefone"
        className={`p-2 m-2 rounded-2xl`}
        onChange={(e) => {setLead({...lead, telefone: e.target.value})}}
        />
        <select 
        className={`p-2 m-2 rounded-2xl text-center`}
        onChange={(e) => {setLead({...lead, modalidade: e.target.value}); setModalidade(e.target.value)}}
        >
            <option value="Presencial">Presencial</option>
            <option value="EAD">EAD (Educação a Distância)</option>
        </select>
        {modalidade == "Presencial" ?
        <select 
        className={`p-2 m-2 rounded-2xl text-center`}
        onChange={(e) => {setLead({...lead, nome_curso: e.target.value})}}
        >
            <option value="Direito">Direito</option>
            <option value="Enfermagem">Enfermagem</option>
            <option value="Psicologia">Psicologia</option>
            <option value="Odontologia">Odontologia</option>
            <option value="Biomedicina">Biomedicina</option>
            <option value="Fisioterapia">Fisioterapia</option>
        </select>   
        :
        <select 
        className={`p-2 m-2 rounded-2xl text-center`}
        onChange={(e) => {setLead({...lead, nome_curso: e.target.value})}}
        >
          <option value="Administração">Administração</option>
          <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
          <option value="Biblioteconomia">Biblioteconomia</option>
          <option value="Ciências Biológicas">Ciências Biológicas</option>
          <option value="Ciências Contábeis">Ciências Contábeis</option>
          <option value="Engenharia Agronômica">Engenharia Agronômica</option>
          <option value="Engenharia Ambiental">Engenharia Ambiental</option>
          <option value="Engenharia Civil">Engenharia Civil</option>
          <option value="Engenharia de Produção">Engenharia de Produção</option>
          <option value="Engenharia Elétrica">Engenharia Elétrica</option>
          <option value="Engenharia Mecânica">Engenharia Mecânica</option>
          <option value="Fisioterapia">Fisioterapia</option>
          <option value="FORDOC (Formação de Docentes)">FORDOC (Formação de Docentes)</option>
          <option value="Gestão Ambiental">Gestão Ambiental</option>
          <option value="Gestão de Recursos Humanos">Gestão de Recursos Humanos</option>
          <option value="Gestão Financeira">Gestão Financeira</option>
          <option value="Gestão Pública">Gestão Pública</option>
          <option value="História">História</option>
          <option value="Marketing">Marketing</option>
          <option value="Pedagogia">Pedagogia</option>
          <option value="Serviço Social">Serviço Social</option>
          <option value="Sistemas de Informação">Sistemas de Informação</option>
        </select> 
        }
        <input placeholder="Empresa Parceira (Opcional)" type='text' className={`p-2 m-2 rounded-2xl`}
        onChange={(e) => {setLead({...lead, empresa: e.target.value})}}
        />
        <div className="w-[100%] flex justify-center items-center">
            <button onClick={(e) => {e.preventDefault(); enviar() ; }} className="shadow-xl active:shadow-none px-4 py-2 my-2 text-xl flex justify-center items-center w-[60%] rounded-2xl bg-[#FFBB00] text-white font-medium mx-1">
            {carregando ? 
            <Puff
            height="50"
            width="50"
            radius={1}
            color="#fff"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            /> :
            <IconRocket size={40} className="mr-1"/>
            }
            Mudar Meu Futuro
            </button>
        </div>
    </form>

    <div className={`${popUp ? "flex" : "hidden"} ease-in flex flex-col justify-center items-center z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-md rounded-xl text-center`}>
        <button onClick={() => setPopUp(false)} className='absolute top-2 right-2'><IconX /></button>
        <h2 className='my-4 text-4xl font-semibold'>Parabéns</h2>
        <Image src="/check.gif" width={200} height={200}/>
        <p className='my-4 text-lg'>Inscrição realizada com sucesso</p>
    </div>
</div>
  )
}
