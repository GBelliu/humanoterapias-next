"use client";

import { ReactNode } from "react";

import { Container, Content, LeftContent, RightContent } from "./styles";

export function TerapiaHolistica() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h1>O que é </h1>
          <p>
            É um tratamento com técnicas específicas e um passo a passo definido
            para cuidar do ser humano nas suas dimensões energética, emocional,
            mental e espiritual, refletindo em sua vida física e corpo físico.
          </p>
        </LeftContent>

        <RightContent>
          <img src="/humanometria.png" alt="" />
        </RightContent>
      </Content>
    </Container>
  );
}
