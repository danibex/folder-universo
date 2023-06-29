import Image from 'next/image'
import { Inter } from 'next/font/google'
import { IconMapPinFilled, IconBrandCashapp, IconParking, IconStarFilled, IconSchool, IconBrandWhatsapp, IconDeviceLaptop, IconStethoscope , IconMicrophone2, IconBalloonFilled } from '@tabler/icons-react';
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
import { useState } from 'react';

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
  const [painel, setPainel] = useState(false);
  const [mostrar, setMostrar] = useState(false)
  function alternarMostrar(alterar) {
    setMostrar(alterar)
  }
  function alternarPainel(alternar) {
    setPainel(alternar);
  }
  return (
  <MenuNavegacao>
    <div className={`
    h-full w-full flex flex-col items-center bg-gradient-to-r from-blue-200 to-red-300
    `}>
      <Image className='mt-5' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} src="/img/centroUniversoSalvador.png" width={350} height={50}/>


      <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
      flex flex-col justify-center items-center
      shadow-xl
      `}>
        <Image className='rounded-2xl' src="/img/videoApresentacao.gif" width={500} height={300}/>
        <div className={`mt-5`}>
          <p className={`font-semibold `}>
               <p className='text-xl text-blue-500 italic'>“Não somos meros espectadores da história que vai passando aleatoriamente sem nossa interferência.”</p>
                <p className='text-lg text-right text-blue-500'>Ana Maria Freire</p>
                <p className='text-right text-blue-400'>Utopia e Democratização na educação Cidadã</p>
          </p>
        </div>
      </div>
      
      
      


      <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
      flex flex-col justify-center items-center
      shadow-xl
      `}>
      <div className='w-full'>
        <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Projeto Talento Empresas</h2>
      </div>
        <Image className='rounded-2xl' src="/img/reuniaoExecutiva.png" width={500} height={300}/>
        <div className={`mt-5`}>
          <p className={`font-medium text-justify`}>
          O mercado de trabalho atual é bastante competitivo, porém muitos trabalhadores não possuem uma formação adequada. Ao mesmo tempo, sabemos que a formação superior dos funcionários é um excelente investimento para uma empresa. 
Pensando nisso, o Centro Universitário Universo Salvador criou o Projeto Talento Empresa, para contribuir com a formação superior de seus colaboradores. Com ele, seus funcionários e
          <button onClick={() => alternarMostrar(true)} className={`${mostrar ? "hidden" : "flex"} ml-2 underline text-blue-700 text-lg text-center`}>Ler mais...</button><p className={`${mostrar ? "flex ":"hidden "}`}> dependentes terão a oportunidade de fazer um curso de nível superior e garantir desconto na mensalidade do primeiro ao último período, em um dos cursos de graduação da UNIVERSO.
Com esta ação estamos cumprindo nossa função social  enquanto instituição filantrópica e sua empresa, sem dúvidas, terá funcionários mais motivados, qualificados e produtivos ao alcançarem o sonho da graduação proporcionado por nossa parceria. Portanto, o convênio com o Centro Universitário Universo Salvador proporcionará um notório aperfeiçoamento profissional de seus funcionários, e certamente trará ótimos frutos à empresa.</p>
<button onClick={() => alternarMostrar(false)} className={`${mostrar ? "flex" : "hidden"} ml-2 underline text-blue-700 text-lg text-center`}>Ler menos</button>
          </p>
          <div className='flex justify-center items-center'>
          </div>
        </div>
      </div>
{/*  */}
      <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
      flex flex-col justify-center items-center
      shadow-xl
      `}>
      <div className='w-full'>
        <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Atrativos</h2>
      </div>
      {/* 

       */}
        <div className={`flex w-[100%] justify-center items-center mt-2 pb-8`}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={true}
            autoplay={{
              delay: 333000,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-center items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-between items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[320px] w-[350px] shadow-lg">
                    <iframe className='w-[330px] h-[400px] mt-3 rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1857.1379445407847!2d-38.47409963075295!3d-12.99104614562687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b47bf14dcdd%3A0x2750cc44b55f2a9c!2sUniverso%20Universidade%20Salgado%20de%20Oliveira%2C%20Universo%20Salvador!5e1!3m2!1spt-BR!2sbr!4v1688062011381!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <div className='flex flex-col justify-center items-center mb-5'>
                      <IconMapPinFilled className='text-red-600 mt-2' size={35}/>
                      <div className="text-xl font-normal text-center mt-4">Uma das melhores localizações de Salvador</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>

                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-center items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-between items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/grafico.png" width={330} height={200}/>
                      <div className='flex flex-col justify-center items-center mb-5'>
                      <IconBrandCashapp className='text-black mt-2' size={35}/>
                      <div className="text-xl font-normal text-center mt-2">Os melhores preços da cidade</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>

                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/estacionamento.png" width={330} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-8'>
                        <IconParking className='text-black' size={35}/>
                        <div className="text-xl font-normal text-center mt-2">Amplo estacionamento</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/seloMec.png" width={150} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-8'>
                        <div className='flex flex-row gap-1'>
                        <IconStarFilled className='text-yellow-400' size={35}/>
                        <IconStarFilled className='text-yellow-400' size={35}/>
                        <IconStarFilled className='text-yellow-400' size={35}/>
                        <IconStarFilled className='text-yellow-400' size={35}/>
                        <IconStarFilled className='text-yellow-400' size={35}/>
                        </div>
                        <div className="text-xl font-normal text-center mt-2">Cursos reconhecidos pelo MEC e com conceitos excelentes</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/jovensNaMesa.png" width={300} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-1'>
                        <div className='flex flex-row'>
                        <IconSchool className='text-black' size={35}/> 
                        </div>
                        <div className="text-xl font-normal text-center mt-2">Coordenadores de cursos acessíveis aos alunos</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/telemarketing.png" width={300} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-1'>
                        <div className='flex flex-row'>
                        <IconBrandWhatsapp className='text-green-500' size={35}/> 
                        </div>
                        <div className="text-xl font-normal text-center mt-2">Canais de atendimentos aos alunos, inclusive por meio de whatsap</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/alunosNotebook.png" width={300} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-1'>
                        <div className='flex flex-row'>
                        <IconDeviceLaptop className='text-gray-700' size={35}/> 
                        </div>
                        <div className="text-xl font-normal text-center mt-2">40% das disciplinas do curso são ministradas na modalidade à distância</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/palestra.png" width={300} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-5'>
                        <div className='flex flex-row'>
                        <IconMicrophone2 className='text-gray-700' size={35}/> 
                        </div>
                        <div className="text-xl font-normal text-center mt-2">Atividades de extensão semestrais</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/partyOffice.png" width={300} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-1'>
                        <div className='flex flex-row'>
                        <IconBalloonFilled className='text-gray-700' size={35}/> 
                        </div>
                        <div className="text-xl font-normal text-center mt-2 mx-1">Atividades e eventos lúdicos (Carnaval, São João, Halloween, etc)</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-between items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-start items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-0 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/profissoes.png" width={250} height={300}/>
                      <div className='flex flex-col justify-star items-center mb-5 mt-1'>
                        <div className='flex flex-row'>
                        <IconStethoscope className='text-gray-700' size={35}/> 
                        </div>
                        <div className="text-xl font-normal text-center mt-2 mx-1">Facilidade de ingresso no mercado de trabalho</div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
 

              </div>
            </div>
          </Swiper>
        </div>

      </div>
{/*  */}

<div className={`bg-white w-full mt-5 shadow-xl`}>
        <h2 className={`text-center text-4xl font-medium text-red-700 my-5`}>Nossos Cursos</h2>
        <div className='flex justify-center items-center mb-5'>
        <div className="w-[295px] flex items-center justify-center border p-0 border-blue-500 bg-slate-100 rounded-full">
            <button
              className={`
                hover:bg-blue-500 hover:text-white active:bg-blue-600 
                rounded-3xl p-2 text-2xl font-medium text-blue-600 
                ${painel ? "" : "bg-blue-500 text-white"}
                m-1
                `}
              onClick={() => alternarPainel(false)}
            >
              Presenciais
            </button>
            <button
              className={`
                hover:bg-blue-500 hover:text-white active:bg-blue-600 
                rounded-3xl p-2 m-1 text-2xl font-medium text-blue-600 
                whitespace-nowrap
                ${painel ? "bg-blue-500 text-white" : ""}
                
                `}
              onClick={() => alternarPainel(true)}
            >
              A distância
            </button>
          </div>
          </div>
          {/* Presenciais */}
        <div className={`${painel ? "hidden":"flex"} w-[100%] justify-center items-center mt-2 pb-8`}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={true}
            navigation
            autoplay={{
              delay: 99000,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <Link href="/odontologia" className="justify-center items-center shadow-xl w-[250px]  h-[355px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[355px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/direito.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Direito</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>8 Semestres / 4 Anos</p>
                          </div>
                        </div>
                    </div>
                  </Link>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Link href="/odontologia" className="justify-center items-center shadow-xl w-[250px] h-[355px] bg-white flex flex-col border rounded-lg hover:opacity-80 active:opacity-70">
                    <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
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
                  <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/psicologia.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Psicologia</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/enfermagem.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Enfermagem</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/biomedicina.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Biomedicina</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/fisioterapia.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Fisioterapia</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
        {/* EAD */}
        <div className={`${painel ? "flex":"hidden"} w-[100%] justify-center items-center mt-2 pb-8`}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={false }
            navigation
            autoplay={{
              delay: 99000,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <Link href="/odontologia" className="justify-center items-center shadow-xl w-[250px]  h-[355px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[355px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/direito.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">teste</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>8 Semestres / 4 Anos</p>
                          </div>
                        </div>
                    </div>
                  </Link>

                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Link href="/odontologia" className="justify-center items-center shadow-xl w-[250px] h-[355px] bg-white flex flex-col border rounded-lg hover:opacity-80 active:opacity-70">
                    <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
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
                  <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/psicologia.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Psicologia</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/enfermagem.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Enfermagem</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/biomedicina.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Biomedicina</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="" src="/img/curso/fisioterapia.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Fisioterapia</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </div>
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
