"use client";

import { ReactNode } from "react";

import {
  Container,
  Content,
  ContentArea,
  ImagePerfil,
  LeftContent,
  RightContent,
  TopContent,
} from "./styles";

export function Sobre() {
  return (
    <Container>
      <ContentArea>
        <ImagePerfil src="./charlesdobronx.jpg" alt="" />
        {/* <span>SOBRE MIM</span> */}
        <h1>Christiane Bellissimo Barbosa</h1>
        <TopContent>
          <p>
            Humanoterapeuta | Psicoterapias Holísticas | Radiestesia e Radiônica
            | Master em Reiki
          </p>
          <p>CRTH-BR: 11118</p>
          <p>Atendimento on-line</p>
        </TopContent>
        <Content>
          <LeftContent></LeftContent>
          <RightContent></RightContent>
        </Content>
      </ContentArea>
    </Container>
  );
}
