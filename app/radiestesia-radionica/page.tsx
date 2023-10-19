"use client";

import { ReactNode } from "react";
import { Container, Content } from "./styles";
import { GridContent } from "../../components/elements/GridContent";
import { AltGridContent } from "../../components/elements/AltGridContent";

export default function RadiestesiaRadionica() {
  return (
    <Container>
      <h1>Radiestesia e Radiônica</h1>
      <Content>
        <AltGridContent
          title="O que é Radiestesia"
          description="A radiestesia é uma arte ou ciência que investiga as radiações naturais dos objetos e seres vivos. O radiestesista utiliza instrumentos específicos, como o pêndulo, para captar essas radiações e obter informações sobre elas.

A radiestesia pode ser utilizada para uma variedade de propósitos, incluindo:

Diagnose - O radiestesista pode usar a radiestesia para diagnosticar problemas de saúde, encontrar objetos perdidos ou avaliar a qualidade de uma água.
Terapia - A radiestesia pode ser usada para tratar problemas de saúde, harmonizar ambientes ou melhorar o desempenho de pessoas ou equipamentos.
Pesquisa - A radiestesia pode ser usada para realizar pesquisas científicas ou para obter informações sobre o passado ou o futuro.
Radionica"
          img="./radiestesia.jpg"
        />
        <GridContent
          title="O que é Radiônica"
          description="A radionica é uma ciência ou arte capaz de trabalhar tais energias, de forma a equlibrá-las e harmonizá-las. 

A radionica pode ser utilizada para uma variedade de propósitos, incluindo:"
          img="./rad.jpg"
        />
      </Content>
    </Container>
  );
}
