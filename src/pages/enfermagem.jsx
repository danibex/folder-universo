import React from 'react'
import BaseParaCurso from "@/components/BaseParaCursos"
export default function direito() {
  return (
    <BaseParaCurso
        nomeDoCurso="Enfermagem"
        modalidade="Presencial"
        duracao="10 Semestres / 5 Anos"
        sobre="O curso de Enfermagem forma profissionais aptos a atuarem na administração de unidades hospitalares, unidades básicas de saúde, núcleos de reabilitação e clínicas integradas. Além disso, aptos a desenvolverem habilidades para intervir no processo saúde-doença, de forma holística, responsabilizando-se pela qualidade da assistência em seus diferentes níveis de atenção integrada. O enfermeiro é preparado também para gerenciar ações de saúde como: programas nacionais de saúde, hospitais, assim como profissionais de nível técnico e superior. A atuação do enfermeiro é fundamental no atendimento aos doentes. Ele faz diagnóstico em sua área, organiza e gerencia serviços de enfermagem, elabora programas assistenciais e presta consultorias."
        matrizCurricular="http://gradecurricular.universo.edu.br/19_306AN.pdf"
        urlImagem="/img/curso/enfermagem.png"
        turno="Noturno"
        linkVideo="https://www.youtube.com/embed/fVXLMJ1Bb6Y"
    />
  )
}
