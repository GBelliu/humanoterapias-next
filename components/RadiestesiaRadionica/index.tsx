"use client";

import { ReactNode } from "react";
import { Container, Content } from "./styles";
import { GridContent } from "../elements/GridContent";
import { AltGridContent } from "../elements/AltGridContent";

export function RadiestesiaRadionica() {
  return (
    <Container>
      <h1>Radiestesia e Radiônica</h1>
      <Content>
        <AltGridContent
          title="O que é Radiestesia"
          description='Reiki é uma terapia holística que utiliza a imposição das mãos para canalizar energia vital para o corpo, mente e espírito de uma pessoa. O objetivo é promover a cura e o bem-estar geral. A palavra "Reiki" é de origem japonesa e significa "energia universal" (rei) e "força vital" (ki). A prática do Reiki foi desenvolvida no início do século XX pelo japonês Mikao Usui.'
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
