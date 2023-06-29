import Image from 'next/image'
import { Inter } from 'next/font/google'

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Link from "next/link";
import MenuNavegacao from '@/components/Menu/MenuNavegacao';

const Breakpoints = {
  0: {
    slidesPerView: 1,
  },
  500: {
    slidesPerView: 2,
  },
  790: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1480: {
    slidesPerView: 5,
  },
};

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <MenuNavegacao>
    <div className={`
    bg-gradient-to-r from-blue-200 to-red-300
    h-full w-full flex flex-col items-center
    `}>
      <Image className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador.png" width={350} height={50}/>


      <div className={` w-[90%] bg-slate-100 mt-8 p-4 rounded-2xl
      flex flex-col justify-center items-center
      shadow-xl
      `}>
        <Image className='rounded-2xl' src="/img/videoApresentacao.gif" width={500} height={300}/>
        <div className={`mt-5`}>
          <p className={`text-xl font-semibold text-blue-500`}>
            Texto de apresentação <br/> (Leonardo (Marketing))
          </p>
        </div>
      
      </div>
      
      <div className={`bg-white w-full mt-5 shadow-xl`}>
        <h2 className={`text-center text-4xl font-medium text-red-700`}>Saiba mais</h2>
        <div className={`w-[100%] justify-center items-center mt-2 pb-8`}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={false}
            navigation
            autoplay={{
              delay: 99000,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    
                    Direito

                  </button>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Link href="/odontologia" className="justify-center items-center shadow-xl w-[250px] h-auto bg-white flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1 h-auto w-[250px]">
                      <Image alt="" src="/img/curso/odontologia.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Odontologia</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Diurno / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>8 Semestres / 4 Anos</p>
                          </div>
                        </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    Psicologia
                  </button>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    Enfermagem
                  </button>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    Biomedicina
                  </button>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    Fisioterapia
                  </button>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </div>

      <div className='h-[3000px] justify-end items-end'>
       
      </div>
    </div>
  </MenuNavegacao>
  )
}
