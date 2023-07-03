import React from 'react'
import BaseParaCurso from "@/components/BaseParaCursos"
export default function direito() {
  return (
    <BaseParaCurso
        nomeDoCurso="Odontologia"
        modalidade="Presencial"
        duracao="8 Semestres / 4 Anos"
        sobre="O curso de Odontologia tem como fundamentação as atuais necessidades sociais, os avanços humanísticos, científicos e tecnológicos. Preconiza recentes recomendações dos órgãos nacionais e internacionais de saúde dos núcleos e associações de ensino odontológico e atua segundo estas. O curso tem uma estruturação curricular e um projeto didático-pedagógico desenvolvido em dois núcleos: o Núcleo Profissional de Saúde com Formação Humanística e o Núcleo Odontológico."
        matrizCurricular="http://gradecurricular.universo.edu.br/19_309AN.pdf"
        urlImagem="/img/curso/odontologia.png"
        turno="Diurno / Noturno"
    />
  )
}