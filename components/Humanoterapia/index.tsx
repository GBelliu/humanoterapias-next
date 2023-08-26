"use client";

import { ReactNode } from "react";

import { Container, Content, LeftContent, RightContent } from "./styles";

export function Humanoterapia() {
  return (
    <Container>
      <h1>Humanoterapia</h1>
      <Content>
        <LeftContent>
          <div></div>
        </LeftContent>

        <RightContent>
          <h2>O que é </h2>
          <p>
            É um tratamento com técnicas específicas e um passo a passo definido
            para cuidar do ser humano nas suas dimensões energética, emocional,
            mental e espiritual, refletindo em sua vida física e corpo físico.
          </p>
        </RightContent>
      </Content>
    </Container>
  );
}
