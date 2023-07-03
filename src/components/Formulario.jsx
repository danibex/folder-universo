import React from 'react'
import { IconRocket } from '@tabler/icons-react'
export default function Formulario() {
  return (
<div className="shadow-xl mb-5 flex flex-col justify-center items-center rounded-xl w-[90%] md:w-[80%] bg-slate-200">
                    <h1 className={`
                    bg-gradient-to-br to-red-500 via-red-600 from-red-700
                    rounded-t-xl p-2 mt-0 w-[100%] flex justify-center items-center text-center
                    text-4xl text-white font-semibold
                    `}>Preencha Aqui<br/>e Garanta sua Bolsa <br/> Agora Mesmo!</h1> 
                    <form className={`flex flex-col justify-center my-3 w-[90%]`}> 
                        <input type="text" placeholder="Nome Completo"
                        className={`p-2 m-2 rounded-2xl`}
                        />
                        <input type="text" placeholder="E-mail"
                        className={`p-2 m-2 rounded-2xl`}
                        />
                        <input type="text" placeholder="Telefone"
                        className={`p-2 m-2 rounded-2xl`}
                        />
                        <select className={`p-2 m-2 rounded-2xl text-center`}>
                            <option value="Presencial">Presencial</option>
                            <option value="EAD">EAD</option>
                        </select>
                        <select className={`p-2 m-2 rounded-2xl text-center`}>
                            <option value="Presencial">Direito</option>
                            <option value="Psicologia">Psicologia</option>
                            <option value="Odontologia">Odontologia</option>
                            <option value="Biomedicina">Biomedicina</option>
                            <option value="Fisioterapia">Fisioterapia</option>
                        </select>
                        <input value="" placeholder="Empresa Parceira (Opcional)" type='text' className={`p-2 m-2 rounded-2xl`}/>
                        <div className="w-[100%] flex justify-center items-center">
                            <button onClick={(e) => {e.preventDefault()}} className="shadow-xl active:shadow-none px-4 py-2 my-2 text-xl flex justify-center items-center w-[60%] rounded-2xl bg-red-600 text-white font-medium mx-1">
                            <IconRocket size={40} className="mr-1"/>
                            Mudar Meu Futuro
                            </button>
                        </div>
                    </form>
                </div>
  )
}
