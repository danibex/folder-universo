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
import Formulario from '@/components/Formulario';
import LogoWhatsapp from "@/components/LogoWhatsapp"
import CardCurso from '@/components/CardCurso';
import BotaoScroll from '@/components/BotaoScroll';
import { Element } from 'react-scroll';
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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [painel, setPainel] = useState(false);
  const [mostrarTalento, setMostrarTalento] = useState(false)
  function alternarMostrarTalento(alterar) {
    setMostrarTalento(alterar)
  }
  const [mostrarHistorico, setMostrarHistorico] = useState(false)
  function alternarMostrarHistorico(alterar) {
    setMostrarHistorico(alterar)
  }
  const [mostrarObjetivo, setMostrarObjetivo] = useState(false)
  function alterarMostrarObjetivo(alterar) {
    setMostrarObjetivo(alterar)
  }
  const [mostrarBaseLegal, setMostrarBaseLegal] = useState(false)
  function alternarMostrarBaseLegal(alterar){
    setMostrarBaseLegal(alterar)
  }
  function alternarPainel(alternar) {
    setPainel(alternar);
  }
  return (
  <MenuNavegacao>
    <div className={`
    h-full w-full flex flex-col items-center bg-[#122E72]
    `}>
      <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
      flex flex-col justify-center items-center
      shadow-xl mb-14
      `}>
        <iframe alt="Vídeo do youtube" className='w-[100%] h-[238px] rounded-xl' src="https://www.youtube.com/embed/2IT-c20XMuY" title="YouTube video player"></iframe>
        <div className={`mt-5`}>
          <div className={`font-semibold `}>
               <p className='text-xl text-blue-500 italic'>“Não somos meros espectadores da história que vai passando aleatoriamente sem nossa interferência.”</p>
                <p className='text-lg text-right text-blue-500'>Ana Maria Freire</p>
                <p className='text-right text-blue-400'>Utopia e Democratização na educação Cidadã</p>
          </div>
        </div>
      </div>
      <div className="mb-7 w-full flex justify-center items-center">
      <BotaoScroll/>
      </div>
        
  
      
      <div className={`flex w-[100%] justify-center items-center mt-2 pb-8`} style={{fontFamily: "'Times New Roman', sans-serif"}}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">

                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
                    flex flex-col justify-center items-center
                    shadow-xl
                    `}>
                    <div className='w-full'>
                    <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Histórico</h2>
                    </div>
                    <Image className='rounded-2xl' src="/img/professoraMarlene.png" width={500} height={300} alt='Foto institucional'/>
                    <div className={`mt-5`}>
                    <p className={`font-medium text-justify`}>
                    No ano de 2006, acompanhando as novas práticas educacionais, a UNIVERSO iniciou o seu programa para a oferta de disciplinas e cursos na modalidade de Educação a Distância. A universidade, após o seu credenciamento para oferta de cursos superiores nesta modalidade, através da Portaria MEC nº 1.672 de 5 de outubro de 2006, publicada no DOU de 9 de outubro de 2006, 
                    </p><button onClick={() => alternarMostrarHistorico(true)} className={`${mostrarHistorico ? "hidden" : "flex"} ml-2 underline text-blue-700 text-lg text-center`}>Ler mais...</button><p className={`${mostrarHistorico ? "flex ":"hidden "}`}> implantou o Departamento de Educação a Distância, ministrando cursos de graduação e de pós-graduação lato sensu. O recredenciamento para oferta de cursos superiores nesta modalidade foi concedido pela Portaria MEC nº 1.627 de 19 de setembro de 2019, publicada no DOU de 23 de setembro de 2019. Atualmente a UNIVERSO conta com dezenas de polos de apoio presencial, implantados e em implantação, distribuídos pelo território nacional, ofertando cursos de graduação – incluindo licenciaturas, bacharelados e superiores de tecnologia – e de especialização. Ainda no ano de 2006, a UNIVERSO obteve o reconhecimento de seus primeiros cursos de pós-graduação stricto sensu, a nível de Mestrado, através da Portaria MEC nº 2.000 de 20 de dezembro de 2006, publicada no DOU de 21 de dezembro de 2006. Foram iniciadas, portanto, as atividades dos Programas de Pós-Graduação em Ciências da Atividade Física, História e Psicologia. O Doutorado em Psicologia foi reconhecido pela Portaria MEC nº 1.331 de 8 de novembro de 2012, publicada no DOU de 9 de novembro de 2012, e o de História pela Portaria MEC nº 816 de 4 de julho de 2017, publicada no DOU de 5 de julho de 2017. O último reconhecimento de todos os programas de pós-graduação stricto sensu – mestrados e doutorados – dinamizados pela UNIVERSO foi obtido a partir da Portaria MEC nº 609, de 14 de março de 2019, publicada no DOU de 18 de março de 2019.</p>
                    <button onClick={() => alternarMostrarHistorico(false)} className={`${mostrarHistorico ? "flex" : "hidden"} ml-2 underline text-blue-700 text-lg text-center`}>Ler menos</button>
                    
                    <div className='flex justify-center items-center'>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
                    flex flex-col justify-center items-center
                    shadow-xl
                    `}>
                    <div className='w-full'>
                    <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Missão</h2>
                    </div>
                    <Image className='rounded-2xl' src="/img/jovensEstudando.png" width={500} height={300}  alt='Foto institucional'/>
                    <div className={`mt-5`}>
                    <p className={`font-medium text-justify`}>
                      O Centro Universitário UNIVERSO Salvador tem a missão de promover a formação integral do homem, dando oportunidade de educação para todos, fundamentada em valores éticos e morais e compromissada com as responsabilidades sociais da comunidade na qual se insere.
                    </p>
                    <div className='flex justify-center items-center'>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
                    flex flex-col justify-center items-center
                    shadow-xl
                    `}>
                    <div className='w-full'>
                    <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Visão</h2>
                    </div>
                    <Image className='rounded-2xl' src="/img/pessoasTrabalhando.png" width={500} height={300}  alt='Foto institucional'/>
                    <div className={`mt-5`}>
                    <p className={`font-medium text-justify`}>
                    O Centro Universo Salvador tem como visão o reconhecimento de seus profissionais egressos por suas habilidades empreendedoras, liderança, pensamento crítico, conhecimento regional e internacional, busca contínua por conhecimento, compromisso com programas sociais, valores éticos e morais, sustentabilidade, habilidades em tecnologia, inclusão social e defesa da democracia e liberdades fundamentais.
                    </p>
                    <div className='flex justify-center items-center'>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
                    flex flex-col justify-center items-center
                    shadow-xl
                    `}>
                    <div className='w-full'>
                    <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Valores</h2>
                    </div>
                    <Image className='rounded-2xl' src="/img/excelenciaAcademica.jpeg" width={500} height={300}  alt='Foto institucional'/>
                    <div className={`mt-5`}>
                    <p className={`font-medium text-justify`}>
                    O Centro Universitário UNIVERSO Salvador tem como base de sua gestão e formação profissional, valores éticos, morais, fraternos, de igualdade, liberdade e sustentabilidade. Busca constantemente alcançar a excelência acadêmica em todas as áreas de atuação, com uma visão inovadora e aberta a novas oportunidades.</p>
                    <div className='flex justify-center items-center'>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
                    flex flex-col justify-center items-center
                    shadow-xl
                    `}>
                    <div className='w-full'>
                    <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Objetivo</h2>
                    </div>
                    <Image className='rounded-2xl' src="/img/mulherDeNegocios.jpeg" width={500} height={300}  alt='Foto institucional'/>
                    <div className={`mt-5`}>
                    <p className={`font-medium text-justify`}>
                    Assumir o compromisso com a formação de profissionais cidadãos efetivamente engajados com as especificidades inerentes ao campo de atuação profissional e com a dimensão social circundante, respeitando os princípios éticos, os valores e visões de mundo que constituem a cultura local dos grupos e/ou comunidades atendidos. 
Com base neste objetivo, </p><button onClick={() => alterarMostrarObjetivo(true)} className={`${mostrarObjetivo ? "hidden" : "flex"} ml-2 underline text-blue-700 text-lg text-center`}>Ler mais...</button><p className={`${mostrarObjetivo ? "flex ":"hidden "}`}> a instituição dinamiza as atividades pedagógicas integrando o ensino, a pesquisa e a extensão através de um eixo axiológico que concebe o processo ensino aprendizagem como um locus que deve ser capaz de promover a articulação das dimensões constitutivas das relações humanas no mundo contemporâneo através da(o): 
 Presença do pluralismo cultural,
Primazia do bem comum, 
 Diálogo multidisciplinar,
 Respeito e acesso a educação para todos, 
 Espírito de fraternidade e solidariedade, 
 Preocupação constante com os novos desafios sociais, 
 Exercício pleno da cidadania e o 
 Reconhecimento da alteridade. 
</p>
                    <button onClick={() => alterarMostrarObjetivo(false)} className={`${mostrarObjetivo ? "flex" : "hidden"} ml-2 underline text-blue-700 text-lg text-center`}>Ler menos</button>

                    
                    <div className='flex justify-center items-center'>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>




                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
                    flex flex-col justify-center items-center
                    shadow-xl
                    `}>
                    <div className='w-full'>
                    <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Projeto Talento Empresas</h2>
                    </div>
                    <Image className='rounded-2xl' src="/img/reuniaoExecutiva.jpeg" width={500} height={300}  alt='Foto institucional'/>
                    <div className={`mt-5`}>
                    <p className={`font-medium text-justify`}>
                    O mercado de trabalho atual é bastante competitivo, porém muitos trabalhadores não possuem uma formação adequada. Ao mesmo tempo, sabemos que a formação superior dos funcionários é um excelente investimento para uma empresa. 
                    Pensando nisso, o Centro Universitário Universo Salvador criou o Projeto Talento Empresa, para contribuir com a formação superior de seus colaboradores. Com ele, seus funcionários e </p>
                    <button onClick={() => alternarMostrarTalento(true)} className={`${mostrarTalento ? "hidden" : "flex"} ml-2 underline text-blue-700 text-lg text-center`}>Ler mais...</button><p className={`${mostrarTalento ? "flex ":"hidden "}`}> dependentes terão a oportunidade de fazer um curso de nível superior e garantir desconto na mensalidade do primeiro ao último período, em um dos cursos de graduação da UNIVERSO.
                    Com esta ação estamos cumprindo nossa função social  enquanto instituição filantrópica e sua empresa, sem dúvidas, terá funcionários mais motivados, qualificados e produtivos ao alcançarem o sonho da graduação proporcionado por nossa parceria. Portanto, o convênio com o Centro Universitário Universo Salvador proporcionará um notório aperfeiçoamento profissional de seus funcionários, e certamente trará ótimos frutos à empresa.</p>
                    <button onClick={() => alternarMostrarTalento(false)} className={`${mostrarTalento ? "flex" : "hidden"} ml-2 underline text-blue-700 text-lg text-center`}>Ler menos</button>
                    
                    <div className='flex justify-center items-center'>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
                    flex flex-col justify-center items-center
                    shadow-xl
                    `}>
                    <div className='w-full'>
                    <h2 className='font-medium text-left text-2xl mb-4 ml-2'>Base Legal</h2>
                    </div>
                    <Image className='rounded-2xl' src="/img/mapaBrasil.png" width={500} height={300}  alt='Foto institucional'/>
                    <div className={`mt-5`}>
                    <p className={`font-medium text-justify`}>
                    A UNIVERSO é uma instituição de ensino superior presente nas cidades de Salvador, Recife, Goiânia, Belo Horizonte, Juiz de Fora, Niterói, São Gonçalo, Itaipu e Campos (RJ). Em Salvador oferece cursos de graduação de licenciatura, bacharelado e superiores de tecnologia.
O Centro Universitário UNIVERSO Salvador foi credenciado </p>
                    <button onClick={() => alternarMostrarBaseLegal(true)} className={`${mostrarBaseLegal ? "hidden" : "flex"} ml-2 underline text-blue-700 text-lg text-center`}>Ler mais...</button><p className={`${mostrarBaseLegal ? "flex ":"hidden "}`}>  a partir da transformação do campus Salvador da Universidade Salgado de Oliveira (UNIVERSO). Em função do Termo de Conciliação firmado entre a ASOEC e a União em 06/11/2007, foi protocolado processo de desmembramento dessa unidade do conjunto que compunha a UNIVERSO, tornando-se, ao final do fluxo processual, o Centro Universitário UNIVERSO Salvador, através da Portaria MEC nº 2020 de 21/11/2019, publicada no Diário Oficial da União de 25/11/2019.
</p>
                    <button onClick={() => alternarMostrarBaseLegal(false)} className={`${mostrarBaseLegal ? "flex" : "hidden"} ml-2 underline text-blue-700 text-lg text-center`}>Ler menos</button>
                    
                    <div className='flex justify-center items-center'>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>

              </div>
            </div>
          </Swiper>
        </div>

    <div className="mb-10 w-full flex justify-center items-center">
      <BotaoScroll/>
    </div>

    {/*  */}
<div className={`bg-white w-full mt-5 shadow-xl mb-14 relative`}>
<Image src="/img/clique1.gif" className='absolute top-60 right-24 z-10' width={90} height={90} alt='Ponteiro do mouse'/>
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
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <Link href="/direito" className="justify-center items-center shadow-xl w-[250px]  h-[355px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[355px] w-[250px] shadow-lg">
                      <Image alt="Imagem do curso" src="/img/curso/direito.png" width={250} height={250} className="rounded-t-lg"/>
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
                      <Image alt="Imagem do curso" src="/img/curso/odontologia.png" width={250} height={250} className="rounded-t-lg"/>
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
                  <Link href="/psicologia" className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="Imagem do curso" src="/img/curso/psicologia.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Psicologia</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link href="/enfermagem" className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="Imagem do curso" src="/img/curso/enfermagem.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Enfermagem</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link href="/biomedicina" className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="Imagem do curso" src="/img/curso/biomedicina.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Biomedicina</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link href="/fisioterapia" className="rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[350px] w-[250px] shadow-lg">
                      <Image alt="Imagem do curso" src="/img/curso/fisioterapia.png" width={250} height={250} className="rounded-t-lg"/>
                      <div className="text-2xl font-medium text-center mt-4">Fisioterapia</div>
                        <div className='flex flex-col mt-4'>
                          <div className='flex flex-row justify-center items-center'>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>Matutino / Noturno</p>
                          </div>
                          <div className={'rounded m-1 flex flex-row justify-center items-center'}>
                            <p className={`font-medium text-blue-500 rounded-xl m-1 p-2 border border-blue-500`}>10 Semestres / 5 Anos</p>
                          </div>
                        </div>
                    </Link>
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
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="cienciasBiologicas"
                    nome_curso="Ciências Biológicas"
                    tempo="8 Semestres / 4 Anos"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="cienciasContabeis"
                    nome_curso="Ciências Contábeis"
                    tempo="8 Semestres / 4 Anos"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="engenhariaAgronomica"
                    nome_curso="Engenharia Agronômica"
                    tempo="10 Semestres / 5 Anos"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="engenhariaAmbiental"
                    nome_curso="Engenharia Ambiental"
                    tempo="10 Semestres / 5 Anos"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="engenhariaCivil"
                    nome_curso="Engenharia Civil"
                    tempo="10 SEMESTRES / 5 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="engenhariaDeProducao"
                    nome_curso="Engenharia de Produção"
                    tempo="10 SEMESTRES / 5 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="engenhariaEletrica"
                    nome_curso="Engenharia Elétrica"
                    tempo="10 SEMESTRES / 5 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="engenhariaMecanica"
                    nome_curso="Engenharia Mecânica"
                    tempo="10 SEMESTRES / 5 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="fisioterapia"
                    nome_curso="Fisioterapia"
                    tempo="10 SEMESTRES / 5 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="docente"
                    nome_curso="FORDOC (Formação de Docentes)"
                    tempo="3 SEMESTRES / 1,5 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="gestaoAmbiental"
                    nome_curso="Gestão Ambiental"
                    tempo="4 SEMESTRES / 2 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="gestaoDeRecursosHumanos"
                    nome_curso="Gestão de Recursos Humanos"
                    tempo="4 SEMESTRES / 2 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="gestaoFinanceira"
                    nome_curso="Gestão Financeira"
                    tempo="4 SEMESTRES / 2 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="gestaoPublica"
                    nome_curso="Gestão Pública"
                    tempo="4 SEMESTRES / 2 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="historia"
                    nome_curso="História"
                    tempo="8 SEMESTRES / 4 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="marketing"
                    nome_curso="Marketing"
                    tempo="4 SEMESTRES / 2 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="pedagogia"
                    nome_curso="Pedagogia"
                    tempo="8 SEMESTRES / 4 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="servicoSocial"
                    nome_curso="Serviço Social"
                    tempo="8 SEMESTRES / 4 ANOS"
                  />
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardCurso
                    href="/"
                    nome_imagem="si"
                    nome_curso="Sistemas de Informação"
                    tempo="8 SEMESTRES / 4 ANOS"
                  />
                </SwiperSlide>


              </div>
            </div>
          </Swiper>
        </div>
      </div>
{/*  */}
<div className="mb-7 w-full flex justify-center items-center">
      <BotaoScroll/>
    </div>

      <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
      flex flex-col justify-center items-center
      shadow-xl mb-14
      `}>
      <div className='w-full'>
        <h2 className='font-medium text-center text-2xl mb-4 ml-2'>Galeria</h2>
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
              delay: 1500,
              disableOnInteraction: true
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
              
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/anatomia.png" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/auditorio.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/biblioteca.png" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/CDO.png" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/estacionamento.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/fisioterapia1.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/fisioterapia2.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/fisioterapia3.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/juriSimulado.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/laboratorioEnfermagem.jpeg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/laboratorioInformatica.png" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/NAPS.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>
                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>         
                      <Image className='rounded-xl w-[100%]' src="/img/galeria/salaDeAula.jpg" width={400} height={400} alt='Foto do curso'/>
                </SwiperSlide>

              </div>
            </div>
          </Swiper>
        </div>

      </div>
{/*  */}

<div className="mb-7 w-full flex justify-center items-center">
    <BotaoScroll/>
</div>  

{/* */}
      <div className={` w-[90%] bg-white mt-8 p-4 rounded-2xl
      flex flex-col justify-center items-center
      shadow-xl mb-14
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
              delay: 1750,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex items-center justify-center">
                {/**<SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div className="justify-center items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-between items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[320px] w-[350px] shadow-lg">
                    <iframe className='w-[330px] h-[400px] mt-3 rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1857.1379445407847!2d-38.47409963075295!3d-12.99104614562687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b47bf14dcdd%3A0x2750cc44b55f2a9c!2sUniverso%20Universidade%20Salgado%20de%20Oliveira%2C%20Universo%20Salvador!5e1!3m2!1spt-BR!2sbr!4v1688062011381!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                      <div className='flex flex-col justify-center items-center mb-5'>
                      <IconMapPinFilled className='text-red-600 mt-2' size={35}/>
                      <div className="text-xl font-normal text-center mt-4">Uma das melhores localizações de Salvador</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                */}

                <SwiperSlide style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                  <div href="/" className="justify-center items-center shadow-xl w-[350px]  h-[320px] bg-white flex flex-col border rounded-lg pb-0 hover:opacity-80 active:opacity-70">
                    <div className="flex flex-col justify-between items-center text-center rounded-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[320px] w-[350px] shadow-lg">
                    <Image className='rounded-lg mt-3' src="/img/grafico.jpeg" width={330} height={200} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/estacionamento.png" width={330} height={300} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/seloMec.png" width={150} height={300} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/jovensNaMesa.jpeg" width={300} height={300} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/telemarketing.png" width={300} height={300} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/alunosNotebook.png" width={300} height={300} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/palestra.png" width={300} height={300} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/partyOffice.png" width={300} height={300} alt='Foto representativa'/>
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
                    <Image className='rounded-lg mt-3' src="/img/profissoes.png" width={250} height={300} alt='Foto representativa'/>
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

      <div className="mb-14 w-full flex justify-center items-center">
        <BotaoScroll/>
        </div>

    <Element name="formulario" className="formulario flex w-full justify-center items-center">
        <Formulario/>
    </Element>
    </div>
    <LogoWhatsapp/>
  </MenuNavegacao>
  )
}
