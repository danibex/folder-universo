import React from 'react'
import { IconPencilMinus, IconTrash, IconArrowsExchange2 } from '@tabler/icons-react'
import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import Image from 'next/image';
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

  function deletarLead(id) {
    fetch(`api/leads?id=${id}`, {method: "DELETE"})
      .then((response) => response.json)
  }
  
  const headers = [
    { label: "ID", key: "id" },
    { label: "Nome Completo", key: "nome" },
    { label: "Email", key: "email" },
    { label: "Telefone", key: "telefone" },
    { label: "Modalidade", key: "modalidade" },
    { label: "Curso", key: "nome_curso" },
    { label: "Empresa (opcional)", key: "empresa" },
    { label: "Data de Inscrição", key: "data_inscricao" }
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex items-start ml-72 my-4 w-full'>
      <CSVLink data={leads} headers={headers} separator={";"} filename={ "Candidatos Cadastrados.csv" } ><Image className='' src="/excelIcon.png" alt='Icone do Excel' width={50} height={50}/></CSVLink>
      </div>
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
                  <td className='py-2 px-4 border border-black'>
                     <button onClick={() => {deletarLead(lead.id); window.location.reload();} } className=' border border-black mx-1 rounded-lg hover:bg-red-700 active:bg-red-800 bg-red-600 font-medium text-white py-1 px-2'><IconTrash size={18}/></button>
                  </td>
              </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
