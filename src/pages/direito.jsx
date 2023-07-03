import React from 'react'
import BaseParaCurso from "@/components/BaseParaCursos"
export default function direito() {
  return (
    <BaseParaCurso
        nomeDoCurso="Direito"
        modalidade="Presencial"
        duracao="10 Semestres / 5 Anos"
        sobre="O curso de Direito forma profissionais capazes de pensar autonomamente e traduzir a missão social dos operadores do Direito, que privilegiam a ética, o respeito à consciência, a responsabilidade, a solidariedade, a valorização do outro, a compreensão, o senso de coletividade, a coerência e a disposição para a evolução científica e interpessoal constante. Para cumprir este objetivo, a estrutura curricular do curso compreende, além das disciplinas obrigatórias, o mínimo de 300 horas de estágio, conduzido pelo Núcleo de Prática Jurídica (NPJ) nos quatro últimos períodos. São também atividades obrigatórias a elaboração de trabalho de conclusão de curso e a realização de 180 horas de atividades complementares."
        matrizCurricular="http://gradecurricular.universo.edu.br/19_206AN.pdf"
        urlImagem="/img/curso/direito.png"
        turno="Matutino / Noturno"
    />
  )
}
