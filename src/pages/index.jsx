import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconMenu2, IconX } from '@tabler/icons-react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import CardCurso from '@/components/CardCurso';
import ProjetoTalentoEmpresas from "@/pages/LandigPages/ProjetoTalentoEmpresas"
export default function index() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const Breakpoints = {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    790: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
    1480: {
      slidesPerView: 1,
    },
  };
  return (
    <>
    {/* <div>
      <div className='flex flex-row p-2 justify-between items-center'>
        <Link href="/" className='flex items-center justify-center'><Image alt='Logo Centro Universo Salvador' className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador2.png" width={310} height={50}/></Link>
        <button onClick={() => { toggleMenu() }}>{toggle ? <IconX size={50} /> : <IconMenu2 size={50} />}</button>
      </div>
      <div className=''>
        <h1>Notícias</h1>
        <h2>Fique por dentro das últimas novidades do campus!</h2>
        <div className='flex flex-row'>
          <div className='w-[]'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={false }
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/administracao"
                    nome_imagem="administracao"
                    nome_curso="Administração"
                    tempo="8 Semestres / 4 Anos"
                    />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="ads"
                    nome_curso="Análise e Desenvolvimento de Sistemas "
                    tempo="5 Semestres / 2 Anos e Meio"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="biblioteconomia"
                    nome_curso="Biblioteconomia"
                    tempo="6 Semestres / 3 Anos"
                  />          
                </SwiperSlide>
              </div>
            </div>
          </Swiper>

          </div>
        </div>
      </div>
    </div>*/} 
    <ProjetoTalentoEmpresas/>
    </>
  )
}
