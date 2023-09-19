"use client";

import { ReactNode } from "react";

import { Container, Content, LeftContent, RightContent } from "./styles";

export function Humanoterapia() {
  return (
    <Container>
      <h1>Humanoterapia</h1>
      <Content>
        <LeftContent>
          <div>
            <img src="./humanoterapia.jpg" alt="" />
          </div>
        </LeftContent>

        <RightContent>
          <h2>O que é </h2>
          <p>
            A Humanoterapia é uma terapia Energética Espiritual que consiste em
            identificar, por meio de um aparelho chamado de Mesa Quantiônica
            (semelhante a Mesa Radiônica mais possuem funções bem distintas),
            capaz de identifica padrões energéticos e inicio do processos, que
            estão levando a pessoa ao problema que o aflige naquele momento.
            Sejam eles no campo da saúde física e/ou emocional, financeiro,
            afetivo, ou qualquer outro que esteja causando algum tipo de
            sofrimento.
          </p>
        </RightContent>
      </Content>
    </Container>
  );
}
