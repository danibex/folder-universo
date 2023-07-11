import Image from 'next/image';
import Link from 'next/link'; 
import BotaoMenu from './BotaoMenu';
import { useState } from 'react';
import {
  IconNews,
  IconCertificate,
  IconMenu2,
  IconX,
  IconHome2
} from '@tabler/icons-react';
export default function MenuNavegacao(props) {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };


  return (
    <div className={props.className}>
      <div className={`
        flex md:flex-row flex-col justify-between items-center p-4 border-b-2 border-green-100 shadow-lg
      `}>
        <div className='flex flex-row justify-center items-center w-[100%] md:w-auto pb-3'>
          <Link href="/" className='flex items-center justify-center'><Image className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador.png" width={310} height={50}/></Link>
          <div className=''>
           {/*  <button onClick={() => { toggleMenu() }}>{toggle ? <IconX size={40} /> : <IconMenu2 size={40} />}</button> */}
             {/*  <Link className=' w-[70px] h-[70px] md:w-auto p-2
              
               my-2 md:my-0 bg-blue-400 hover:bg-blue-500 active:bg-blue-600  rounded-lg text-white font-medium mx-1 flex flex-row justify-center items-center
              ' href="/"><IconHome2 size={35} className='mr-1' /></Link> */}
          </div>
        </div>
        {/**
        <div className={`${toggle ? "flex" : "hidden"} w-[100%] flex-col md:flex md:flex-row justify-center items-center`}>
          <div className='w-[100%] flex flex-col md:flex-row justify-center items-center'>
            <div className='w-[100%] flex flex-col md:flex-row my-3 justify-center items-center'>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/vocacional"><BotaoMenu><IconCertificate className='mr-1' />Presenciais</BotaoMenu></Link>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/blog"><BotaoMenu><IconNews className='mr-1' />EAD</BotaoMenu></Link>
            </div>
            
          </div>
        </div>
         */}
      </div>

      <div>
        {props.children}
      </div>
    </div>
  );
}
