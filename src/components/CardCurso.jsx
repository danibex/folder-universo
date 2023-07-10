import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function CardCurso(props) {
  return (
<Link href={props.href} className="justify-center items-center shadow-xl w-[250px]  h-auto bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
<div className="rounded-lg mx-0 px-0 mt-0 pt-0 h-auto w-[250px] shadow-lg">
    <Image alt="" src={`/img/curso/${props.nome_imagem}.png`} width={250} height={250} className="rounded-t-lg"/>
    <div className="text-2xl font-medium text-center mt-4">{props.nome_curso}</div>
    <div className='flex flex-col mt-4 justify-center items-center'>
        <div className={`${props.turno ? "flex" : "hidden"} flex flex-row justify-center items-center`}>
        <p className={`font-medium text-blue-500 rounded-xl m-1 p-2  border-blue-500 border`}>{props.turno}</p>
        </div>
        <div className={'rounded m-1 flex flex-row justify-center items-center'}>
        <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>{props.tempo}</p>
        </div>
    </div>
</div>
</Link>
  )
}
