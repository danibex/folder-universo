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
        <div className='flex flex-row justify-between items-center w-[100%] md:w-auto'>
          <Link href="/"><Image alt="" width={80} height={80} src="/img/Universo.png"/></Link>
          <div className='md:hidden flex mr-5'>
            <button onClick={() => { toggleMenu() }}>{toggle ? <IconX size={40} /> : <IconMenu2 size={40} />}</button>
          </div>
        </div>
        <div className={`${toggle ? "flex" : "hidden"} w-[100%] flex-col md:flex md:flex-row justify-center items-center`}>
          <div className='w-[100%] flex flex-col md:flex-row justify-center items-center'>
            <div className='w-[100%] flex flex-col md:flex-row my-3 justify-center items-center'>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/"><BotaoMenu><IconHome2 className='mr-1' />Início</BotaoMenu></Link>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/vocacional"><BotaoMenu><IconCertificate className='mr-1' />Presenciais</BotaoMenu></Link>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/blog"><BotaoMenu><IconNews className='mr-1' />EAD</BotaoMenu></Link>
            </div>
            
          </div>
        </div>
      </div>

      <div>
        {props.children}
      </div>
    </div>
  );
}
