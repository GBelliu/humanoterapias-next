"use client";

import { ReactNode } from "react";
import { Container, Content } from "./styles";
import { GridContent } from "../elements/GridContent";
import { AltGridContent } from "../elements/AltGridContent";

export function Psicoterapias() {
  return (
    <Container>
      <h1>Psicoterapias Holísticas</h1>
      <Content>
        <AltGridContent
          title="O que é"
          description="As psicoterapias holísticas são um conjunto de abordagens terapêuticas que consideram o ser humano em sua totalidade, integrando os aspectos físicos, emocionais, mentais e espirituais.

Essas abordagens terapêuticas se baseiam no princípio de que o corpo, a mente e o espírito estão interligados e que, para promover a saúde e o bem-estar, é necessário tratar a pessoa como um todo."
          img="./psicoterapias.jpg"
        />
      </Content>
    </Container>
  );
}
