import React from 'react'
import { IconRocket } from '@tabler/icons-react';
import { Link, Element } from 'react-scroll';
export default function BotaoScroll(props) {
  return (
    <Link to="formulario" href='#parceiros' smooth={true} duration={500} className='shadow-xl active:shadow-none px-4 py-2 my-2 text-xl flex justify-center items-center w-[60%] rounded-2xl bg-[#FFBB00] text-white font-medium mx-1'>
       <IconRocket size={40} className={`${props.className}`}/>
    Mudar Meu Futuro
    </Link>
  )
}
