import React from 'react'
import { IconPencilMinus, IconTrash, IconArrowsExchange2 } from '@tabler/icons-react'
import { useEffect, useState } from 'react';

export default function leads() {
  const [leads, setLeads] = useState([])
  useEffect(() => {
    fetch(`api/leads`)
      .then((response) => response.json())
      .then((data) => {
        setLeads(data)
        console.log(data)
      })
  }, [])
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='my-4'>Leads</h1>
      <table>
        <thead>
            <tr className='border border-black text-center font-medium bg-blue-400 text-white'>
                <td className='border border-black'>ID</td>
                <td className='border border-black'>Nome Completo</td>
                <td className='border border-black'>E-mail</td>
                <td className='border border-black'>Telefone</td>
                <td className='border border-black'>Modalidade</td>
                <td className='border border-black'>Cruso</td>
                <td className='border border-black'>Empresa</td>
                <td className='border border-black'>Data</td>
                <td className='border border-black'>Hora</td>
                <td className='border border-black'>Ações</td>
            </tr>
        </thead>
        <tbody>
            {leads.map((lead, index) => {
              return(
              <tr className='border border-black' key={lead.id}>
                  <td className='py-2 px-4 border border-black text-center'>{lead.id}</td>
                  <td className='py-2 px-4 border border-black'>{lead.nome}</td>
                  <td className='py-2 px-4 border border-black'>{lead.email}</td>
                  <td className='py-2 px-4 border border-black'>{lead.telefone}</td>
                  <td className='py-2 px-4 border border-black'>{lead.modalidade}</td>
                  <td className='py-2 px-4 border border-black'>{lead.nome_curso}</td>
                  <td className='py-2 px-4 border border-black'>{lead.empresa}</td>
                  <td className='py-2 px-4 border border-black text-center'>{lead.data_inscricao.slice(0, 10)}</td>
                  <td className='py-2 px-4 border border-black text-center'>{lead.data_inscricao.slice(11, 16)}</td>
                  <td className='py-2 px-4 border border-black'>
                     <button className=' border border-black mx-1 rounded-lg hover:bg-red-700 active:bg-red-800 bg-red-600 font-medium text-white py-1 px-2'><IconTrash size={18}/></button>
                  </td>
              </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
