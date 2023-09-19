"use client";

import { Container, Content, LeftContent, RightContent } from "./styles";

export function Hero() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <div>
            <img src="./perfil.png" alt="" />
          </div>
        </LeftContent>
        <RightContent>
          <div>
            <h1>Chris Bellissimo</h1>
            <h2>
              Humanoterapeuta | Psicoterapeuta Holística | Radiestesia e
              Radiônica | Mestre em Reiki | Aromateupa Flora
            </h2>
            <h2>
              CRTH-BR <span>11118</span>
            </h2>
            <h2>
              <span>🟢 Atendimento online</span>
            </h2>
          </div>
          <p>
            ✨ Ajudando pessoas a reconhecerem suas forças e valores,
            despertando autoconfiança para buscarem o que as fazem felizes.
          </p>
          <button>
            <p>Agendar consulta</p>
          </button>
        </RightContent>
      </Content>
    </Container>
  );
}
