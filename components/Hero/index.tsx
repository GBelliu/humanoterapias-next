"use client";

import { Container, Content, LeftContent, RightContent } from "./styles";

export function Hero() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <div></div>
        </LeftContent>
        <RightContent>
          <h1>Christiane Bellissimo</h1>
          <h2>
            Humanoterapeuta | Psicoterapias Holísticas | Radiestesia e Radiônica
            | Master em Reiki
          </h2>
          <h2>
            CRTH-BR <span>11118</span>
          </h2>
          <h2>
            <span>Atendimento on-line</span>
          </h2>
          <p>
            "Ajudando pessoas a reconhecerem suas forças e valores, despertando
            autoconfiança para buscarem o que as fazem felizes"
          </p>
          <button>
            <p>Agendar consulta</p>
          </button>
        </RightContent>
      </Content>
    </Container>
  );
}
