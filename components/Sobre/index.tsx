"use client";

import { ReactNode } from "react";

import {
  Container,
  Content,
  ContentArea,
  LeftContent,
  RightContent,
  TopContent,
} from "./styles";

export function Sobre() {
  return (
    <Container>
      <ContentArea>
        <span>SOBRE MIM</span>
        <h1>Christiane Bellissimo Barbosa</h1>
        <TopContent>
          <p>
            Meu nome é Christiane, mas todos me chamam de Chris. Nasci em São
            Paulo, mas moro em Rio Claro, uma cidade do interior que eu amo. Sou
            sagitariana, intensa em tudo que faço e sou muito feliz. Sou casada,
            mãe de 3 filhos e mais uma filha de 4 patas (minha Maria 🐶). Minha
            formação acadêmica é em Pedagogia, uma profissão que me trouxe
            muitas alegrias, muito conhecimento e muito prazer em poder ensinar,
            mas na verdade, muitas vezes, eu mais aprendi do que ensinei, a vida
            é sempre um eterno aprendizado. Meu maior prazer na vida é
            estudar... Amo! Sou Psicoterapeuta Holística desde 2020,
            Humanoterapeuta, mestre em Reiki tradicional Usui e Karuna,
            Terapeuta Floral, Aromaterapeuta Cromoterapeuta, Radiestesia e
            Radiônica, Terapia de Vivências Passadas e Cura Prânica. Encontrei
            meu propósito de vida nas terapias, onde eu consigo entender um
            pouco sobre os mistérios de vida e ajudar um número maior de
            pessoas.
          </p>
        </TopContent>
        <Content>
          <LeftContent></LeftContent>
          <RightContent></RightContent>
        </Content>
      </ContentArea>
    </Container>
  );
}
