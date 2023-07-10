import React from 'react'
import BaseParaCurso from "@/components/BaseParaCursos"
export default function psicologia() {
  return (
    <BaseParaCurso
        nomeDoCurso="Psicologia"
        modalidade="Presencial"
        duracao="10 Semestres / 5 Anos"
        sobre="A psicologia é uma ciência que trata do ser humano numa perspectiva biopsicossocial, interagindo com vários campos de saber e práticas sociais. Por isso, precisa estar atualizada em relação às inovações científicas e aos acontecimentos da sociedade contemporânea. O curso destina-se à formação de psicólogos aptos a pesquisar situações e problemas psicológicos presentes na educação, na saúde, no trabalho na vida social e neles intervir."
        matrizCurricular="http://gradecurricular.universo.edu.br/19_310AN.pdf"
        urlImagem="/img/curso/psicologia.png"
        turno="Noturno"
    />
  )
}
